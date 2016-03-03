var Post = require('../models/post');
module.exports = require('express').Router()
    .get('/favicon.ico', function (req, res, next) {
        res.redirect('http://lorempixel.com/g/64/64');
    })
    .get('/post', function (req, res, next) {
        Post.find({}, function (err, posts) {
            if (err) {
                res.json({
                    code: -1,
                    msg: 'bug',
                    body: {},
                });
                console.log('[error]', err);
            } else {
                res.json({
                    code: 0,
                    msg: 'ok',
                    body: posts,
                });
            }
        })
    })
    .post('/post', function (req, res, next) {
        new Post({
            title: req.body.title,
            content: req.body.content,
        }).save(function (err, post) {
            if (err) {
                res.json({
                    code: -1,
                    msg: 'bug',
                    body: {},
                });
                console.log('[error]', err);
            } else {
                res.json({
                    code: 0,
                    msg: 'ok',
                    body: post,
                });
            }
        })
    })