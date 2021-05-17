const express = require('express');
const authData = require('../model/authData');
const authRouter = express.Router();

function authR(nav){
    authRouter.get('/',function(req, res){
        authData.find()
        .then(function(auth){
            res.render("authors",{
                nav,
                title:'Authors',
                auth
            });
        });
    });

    authRouter.get('/:id',function(req,res){
        const id = req.params.id;
        authData.findOne({_id: id})
        .then(function(auth){
            res.render('author',{
                nav,
                title: auth.name,
                auth
            });
        });
    });

    return authRouter;

}

module.exports = authR;