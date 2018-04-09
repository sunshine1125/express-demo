const express = require('express');
const appRouter = express.Router();

// app.all()是一个特殊的路由方法，没有任何的HTTP方法与其对应，他的作用是对于一个路径上的所有请求加载中间件
appRouter.all('/test/*', function (req, res, next) {
    console.log('我是all提供的中间件');
    next();
});

// getData 节点接受 get 请求，返回 ‘获取数据’
appRouter.get('/test/getData', function(req, res){
    res.send('获取数据');
});
// addData 节点接受 post 请求，返回 ‘添加数据’
appRouter.post('/test/addData', function(req, res) {
    res.send('添加数据');
});
// editData 节点接受 put 请求，返回 ‘修改数据’
appRouter.put('/test/editData/:id?', function(req, res) {
    res.send('修改数据');
});
// removeData 节点接受 delete 请求，返回 ‘删除数据’
appRouter.delete('/test/removeData/:id', function(req, res) {
    res.send('删除数据');
});

module.exports = appRouter;