'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res) {
    res.render('index', { title: 'Welcome to my family information page' });
});

router.get('/ramandeep', function (req, res) {
    res.render('ramandeep', { title: 'Ramandeep\'s info' });
});

router.get('/amrik', function (req, res) {
    res.render('amrik', { title: 'Amrik\'s info' });
});

router.get('/tara', function (req, res) {
    res.render('tara', { title: 'Tara\'s info' });
});

module.exports = router;