const express = require('express');
const authRouter = express.Router();

function authR(nav){

    var authors = [
        {
            authName: 'Matt Haig',
            bio: 'Helloworld',
            img:'midnight.jpg'
        },
        {
            authName: 'Michelle Obama',
            bio: 'Helloworld',
            img:'becoming.jpg'
        },
        {
            authName:"J.K. Rowling",
            bio: 'Helloworld',
            img:'harry.jpg'
        }
    ];

    authRouter.get('/',function(req, res){
        res.render("authors",{
            nav,
            title:'Authors',
            authors
        })
    });

    authRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('author',{
            nav,
            title: authors[id].title,
            auth: authors[id]
        })
    });

    return authRouter;

}

module.exports = authR;