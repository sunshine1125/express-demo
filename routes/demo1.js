const express = require('express');
const appRouter = express.Router();

// 中间件 对使用中间件的所有请求进行预处理
// appRouter.use((req, res, next) => {
//     console.log('我是demo1的中间件');
//     next();
// });

function test(req, res, next) {
    console.log(1);
    next();
}
// getData 节点接受 get 请求，返回 ‘获取数据’
appRouter.get('/getData', test, (req, res) => {
    res.send('获取数据');
});
// addData 节点接受 post 请求，返回 ‘添加数据’
appRouter.post('/addData', (req, res) => {
    console.log(req.body);
    res.send('添加数据');
});
// editData 节点接受 put 请求，返回 ‘修改数据’
appRouter.put('/editData/:id', (req, res) => {
    // console.log(req.params.id)
    console.log(req.body);
    res.send('修改数据');
});
// removeData 节点接受 delete 请求，返回 ‘删除数据’
appRouter.delete('/removeData/:id', (req, res) => {
    res.send('删除数据');
});

module.exports = appRouter;