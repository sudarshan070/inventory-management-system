var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')


const clusterMongoDb = "mongodb+srv://testuser:testShinde@cluster0.qsdnt.mongodb.net/inventory?retryWrites=true&w=majority"

mongoose.connect(clusterMongoDb,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    (err) => {
        console.log("connected", err ? err : true)
    }
)

var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');
var orderRouter = require('./routes/order')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter)

module.exports = app;


