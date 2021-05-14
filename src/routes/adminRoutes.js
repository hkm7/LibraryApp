const express = require('express');
const adminRouter = express.Router();
const bookData = require('../model/BookData');
const authData = require('../model/authData');

function router(nav, redirectLogin){
    adminRouter.get('/', redirectLogin,function(req, res){
        res.render('edit',{
            nav,
            title: 'Edit Data'
        })
    });

    adminRouter.post('/addBook', redirectLogin,function(req,res){
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image,
            bio: req.body.bio,
        };

        var book = bookData(item);
        book.save(); //saving to db
        res.redirect('/books');
    });

    adminRouter.post('/addAuth',function(req,res){
        var item = {
            name: req.body.name,
            image: req.body.image,
            bio: req.body.bio,
            bio2: req.body.bio2
        };

        var auth = authData(item);
        auth.save();
        res.redirect('/authors');
    });

    return adminRouter;
};

module.exports = router;
