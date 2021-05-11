const express = require("express");
const loginRouter = express.Router();
const loginData = require('../model/loginData');

function lRouter(nav){

    loginRouter.get('/',function(req,res){
        res.render('login',{
            nav,
            title: 'Login'
        });
    });

    loginRouter.post('/auth',function(req,res){
        var item = {
            email: req.body.email,
            password: req.body.password
        };

        var creds = loginData(item);
        creds.save();
        res.redirect('/books');
    });

    return loginRouter;
};

module.exports = lRouter;