const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const categories = require('./categories/index.get.json');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use(function (req, res, next) {
    res.setHeader('charset', 'utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/greeting', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
});

app.get('/api/categories', (req, res) => {
    res.json(categories);
});

app.listen(8080, () =>
    console.log('Express server is running on localhost:8080')
);