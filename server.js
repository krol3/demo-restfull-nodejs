/**
 * File: server.js
 * Description: 
 * Author: Carol Valencia
 * Creation date: 15/05/2018
 */

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var ProductModel = require('./app/models/product')
mongoose.Promise = require('bluebird')

//mongoose.connect('mongodb://mynode:test123@localhost:27017/node-crud-api',
mongoose.connect(`mongodb://${process.env.MONGO_URL ||
"localhost"}/node-crud-api`, {
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 8000
var router = express.Router()

router.use('/', function (req, res, next) {
    console.log(' Middleware .... ')
    next()
})

router.get('/', function (req, res) {
    res.json({ message: 'Hello world from nodejs' })
})

// API endpoints

router.route('/products')
    .post(function (req, res) {
        var product = new ProductModel()
        product.name = req.body.name
        product.price = req.body.price
        product.description = req.body.description

        const saveResult = product.save()
            .then(product => {
                console.log('product:', product)
                return res.status(201).json({ success: saveResult })
            })
            .catch(err => {
                console.log('error:', err)
                return res.status(400).json({ message: 'Register with error... ' + err })
            })
    })
    .get(function (req, res) {
        const saveResult = ProductModel.find()
            .then(doc => {
                return res.status(201).json({ success: doc })
            })
            .catch(err => {
                return res.status(400).json({ message: 'Find with error... ' + err })
            })
    })

router.route('/products/:product_id')
    .get(function (req, res) {
        const saveResult = ProductModel.findById(req.params.product_id)
            .then((obj) => {
                return res.status(201).json({ success: obj })
            })
            .catch(err => {
                return res.status(400).json({ message: 'findById with error... ' + err })
            })
    })
    .put(function (req, res) {
        const saveResult = ProductModel.findById(req.params.product_id)
            .then((prod) => {
                prod.name = req.body.name
                prod.price = req.body.price
                prod.description = req.body.description

                prod.save()

                return res.status(201).json({ success: prod })
            })
            .catch(err => {
                return res.status(400).json({ message: 'findById with error... ' + err })
            })
    })
    .delete(function (req, res) {
        const saveResult = ProductModel.findById(req.params.product_id)
            .then((prod) => {
                prod.remove()

                return res.status(201).json({ success: prod })
            })
            .catch(err => {
                return res.status(400).json({ message: 'delete with error... ' + err })
            })
    })

app.use('/api', router)
app.listen(port)
console.log('Initializing at the port: ' + port)