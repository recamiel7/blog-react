const Router = require('koa-router');
const posts = require('./posts');
const auth = require('./auth');
const schedules = require('./schedules');

const api = new Router();

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());
api.use('/schedules', schedules.routes());

// 라우터를 내보냅니다.
module.exports = api;