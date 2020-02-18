const Router = require('koa-router');
const schedulesCtrl = require('./schedules.ctrl');

const schedules = new Router();

schedules.get('/', schedulesCtrl.list);
schedules.post('/', schedulesCtrl.write);
schedules.get('/:id', schedulesCtrl.checkObjectId, schedulesCtrl.read);
schedules.delete('/:id', schedulesCtrl.checkObjectId, schedulesCtrl.remove);
schedules.patch('/:id', schedulesCtrl.checkObjectId, schedulesCtrl.update);

// schedules.get('/', schedulesCtrl.list);
// schedules.post('/', schedulesCtrl.checkLogin, schedulesCtrl.write);
// schedules.get('/:id', schedulesCtrl.checkObjectId, schedulesCtrl.read);
// schedules.delete('/:id', schedulesCtrl.checkLogin, schedulesCtrl.checkObjectId, schedulesCtrl.remove);
// schedules.patch('/:id', schedulesCtrl.checkLogin, schedulesCtrl.checkObjectId, schedulesCtrl.update);

module.exports = schedules;