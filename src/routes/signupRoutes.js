const express = require("express");
const signupRouter = express.Router();

function sRouter(nav){
    
    signupRouter.get('/', function (req, res){
        res.render('signup',{
            nav,
            title : 'Signup'
        })
    });

    return signupRouter;
};

module.exports= sRouter;