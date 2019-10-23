const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const categories = require('./categories/index.get.json');
const products = require('./products/index.get.json');
const banners = require('./banners/index.get.json');
const addToCart = require('./addToCart/index.post.json');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use(function (req, res, next) {
    res.setHeader('charset', 'utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/categories', (req, res) => {
    res.json(categories);
});

app.get('/api/products', (req, res) => {
    const category = req.query.catId;
    const filteredProducts = products.filter((product) => {
         return category === undefined ? product : product.category === category;
    })
    res.json(filteredProducts);
});

app.get('/api/banners', (req, res) => {
    res.json(banners);
});

app.get('/api/addToCart', (req, res) => {
    res.json(addToCart);
});

app.listen(8080, () =>
    console.log('Express server is running on localhost:8080')
);