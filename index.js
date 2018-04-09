const express = require('express'); // 引入express
const app = express(); // 实例化
const path = require('path');
const bodyParser = require('body-parser');
const demo1 = require('./routes/demo1');
const demo2 = require('./routes/demo2');
const demo3 = require('./routes/demo3');
const demo4 = require('./routes/demo4');

// use body parser so we can get info from post or url parameters
app.use(bodyParser.urlencoded({extended: false})); // 第三方中间件
app.use(bodyParser.json());

// 利用express托管静态文件
app.use(express.static('public'));// express.static内置中间件

// 视图引擎
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);// 用ejs的模板解析.html
app.set('view engine', 'html');// 设置后缀名

app.use(demo1);
app.use(demo2);
app.use(demo3);
app.use(demo4);


app.get('/', (req, res) => {
   res.send('Hello World!');
});

// 可使用 app.route() 创建路由路径的链式路由句柄
app.route('/book')
    .get(function(req, res) {
        res.send('Get a random book');
    })
    .post(function(req, res) {
        res.send('Add a book');
    })
    .put(function(req, res) {
        res.send('Update the book');
    });

app.listen(3000);
console.log("success listening in port 3000");


