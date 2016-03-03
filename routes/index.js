
module.exports = require('express').Router()
.get('/favicon.ico',function(req,res,next){
    res.redirect('http://lorempixel.com/g/64/64');
})