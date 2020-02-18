const Schedule = require('models/schedule');
const Joi = require('joi');

const { ObjectId } = require('mongoose').Types;

exports.checkObjectId = (ctx, next) => {
  const { id } = ctx.params;

  // 검증 실패
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // 400 Bad Request
    return null;
  }

  return next(); // next를 리턴해주어야 ctx.body가 제대로 설정됩니다.
};

// exports.checkLogin = (ctx, next) => {
//   if (!ctx.session.logged) {
//     ctx.status = 401; // Unauthorized
//     return null;
//   }
//   return next();
// };

/*
  POST /api/schedules
  { title, body }
*/
exports.write = async (ctx) => {
  // 객체가 지닌 값들을 검증합니다.
  const schema = Joi.object().keys({
    title: Joi.string().required(), // 뒤에 required를 붙여주면 필수 항목이라는 의미
    body: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
  });

  // 첫 번째 파라미터는 검증할 객체, 두 번째는 스키마
  const result = Joi.validate(ctx.request.body, schema);

  // 오류 발생 시 오류 내용 응답
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, body, startDate, endDate } = ctx.request.body;

  // 새 Schedule 인스턴스를 생성합니다.
  const schedule = new Schedule({
    title, body, startDate, endDate
  });

  try {
    await schedule.save(); // 데이터베이스에 등록합니다.
    ctx.body = schedule; // 저장된 결과를 반환합니다.
  } catch (e) {
    // 데이터베이스의 오류 발생
    ctx.throw(e, 500);
  }
};

/*
  GET /api/schedules
*/
exports.list = async (ctx) => {
  // page가 주어지지 않았다면 1로 간주
  // query는 문자열 형태로 받아 오므로 숫자로 변환
  const page = parseInt(ctx.query.page || 1, 10);

  // 잘못된 페이지가 주어졌다면 에러
  if (page < 1) {
    ctx.status = 400;
    return;
  }

  try {
    const schedules = await Schedule.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const scheduleCount = await Schedule.countDocuments(query).exec();
    const limitBodyLength = schedule => ({
      ...schedule,
      body: schedule.body.length < 100 ? schedule.body : `${schedule.body.slice(0, 100)}...`
    });
    ctx.body = schedules.map(limitBodyLength);
    // 마지막 페이지 알려 주기
    // ctx.set은 response header를 설정해줍니다.
    ctx.set('Last-Page', Math.ceil(scheduleCount / 10));
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  GET /api/schedules/:id
*/
exports.read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const schedule = await Schedule.findById(id).exec();
    // 일정이 존재하지 않음
    if (!schedule) {
      ctx.status = 404;
      return;
    }
    ctx.body = schedule;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

/*
  DELETE /api/schedules/:id
*/
exports.remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Schedule.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

/*
  PATCH /api/schedules/:id
  { title, body }
*/
exports.update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const schedule = await Schedule.findByIdAndUpdate(id, ctx.request.body, {
      new: true
      // 이 값을 설정해 주어야 업데이트된 객체를 반환합니다.
      // 설정하지 않으면 업데이트되기 전의 객체를 반환합니다.
    }).exec();
    // 일정이 존재하지 않을 시
    if (!schedule) {
      ctx.status = 404;
      return;
    }
    ctx.body = schedule;
  } catch (e) {
    ctx.throw(e, 500);
  }
};