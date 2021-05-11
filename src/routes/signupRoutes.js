const express = require("express");
const signupRouter = express.Router();

function sRouter(nav){
    
    signupRouter.get('/', function (req, res){
        res.render('signup',{
            nav,
            title : 'Signup'
        })
    });

    signupRouter.post('/auth',function(req,res){
        var item = {
            phone:req.body.phone,
            email: req.body.email,
            password: req.body.password
        };

        var creds = loginData(item);
        creds.save();
        res.redirect('/books');
    });
    
    return signupRouter;
};

module.exports= sRouter;