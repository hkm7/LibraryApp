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
        credData.findOne({email: mail})
        .then(function (credential){
            if(credential===null){
                var creds = credData(item);
                creds.save();
                req.session.userId = String(credential._id);
                res.redirect('/admin');
            }
            else{
                res.redirect('/login');
            }
        }); 
    });
    
    return signupRouter;
};

module.exports= sRouter;