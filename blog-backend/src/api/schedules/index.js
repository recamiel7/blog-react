const Router = require('koa-router');
const schedulesCtrl = require('./schedules.ctrl');

const schedules = new Router();

schedules.get('/', schedulesCtrl.list);
schedules.get('/:id', schedulesCtrl.checkObjectId, schedulesCtrl.read);

schedules.post('/', schedulesCtrl.checkLogin, schedulesCtrl.write);
schedules.delete('/:id', schedulesCtrl.checkLogin, schedulesCtrl.checkObjectId, postsCtrl.remove);
schedules.patch('/:id', schedulesCtrl.checkLogin, schedulesCtrl.checkObjectId, schedulesCtrl.update);

module.exports = schedule;