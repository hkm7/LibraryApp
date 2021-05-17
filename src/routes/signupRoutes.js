const express = require("express");
const bcrypt = require('bcryptjs');
const signupRouter = express.Router();
const credData = require('../model/credentialData');

function sRouter(nav,redirectHome){
    signupRouter.get('/', redirectHome, function (req, res){
        res.render('signup',{
            nav,
            title : 'Signup'
        })
    });

    signupRouter.post('/auth', redirectHome, function(req,res){
        var passwordHash = bcrypt.hashSync(req.body.pwd, 10);
        var mail = req.body.mailId;
        var item = {
            phone:req.body.phoneNum,
            email: mail,
            password: passwordHash
        };
        
        var exists= credData.findOne({email: mail});
        if(exists===null){
            var creds = credData(item);
            creds.save();
            var credential = String(credData.findOne({email:mail})._id);
            req.session.userId = String(credential._id);
            console.log(credential);
            res.redirect('/admin');     
        }  
        else{
            res.send("User already exists");
        } 
    });
    
    return signupRouter;
};

module.exports= sRouter;