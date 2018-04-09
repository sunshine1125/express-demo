const express = require('express');
const appRouter = express.Router();

// 匹配 acd 和 abcd
appRouter.get('/ab?cd', (req, res) => {
    res.send('匹配到了');
});

// 匹配 abcd、abbcd、abbbcd等
appRouter.get('/ab+cd', (req, res) => {
    res.send('匹配到了');
});

module.exports = appRouter;