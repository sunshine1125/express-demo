const express = require('express');
const appRouter = express.Router();
// 响应方法

// res.send() 发送各种类型的响应
appRouter.get('/send', (req, res) => {
    res.send('send');
});

// res.json() 发送一个JSON格式的响应
appRouter.get('/json', (req, res) => {
    res.json({data: 111});
});

// res.redirect() 重定向请求
appRouter.get('/redirect', (req, res) => {
    res.redirect("http://localhost:3000/getData")
});

// res.render() 渲染视图模板, 支持的模板有.ejs和.jade
appRouter.get('/render', (req, res) => {
    res.render('index')
})

appRouter.get('/status', (req, res) => {
    res.status('200').json({code: 200, success: true, message: '成功'})
})

module.exports = appRouter;