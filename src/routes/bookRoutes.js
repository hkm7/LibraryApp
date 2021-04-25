const express = require('express');
const booksRouter = express.Router();

function router(nav){

    var books = [
        {
            title: 'The Midnight Library',
            author: 'Matt Haig',
            genres: 'Science Fiction, Fantasy Fiction, Philosophical fiction',
            img:'midnight.jpg'
        },
        {
            title: 'Becoming',
            author: 'Michelle Obama',
            genres: 'Memoir',
            img:'becoming.jpg'
        },
        {
            title:"Harry Potter and the Philosopher's Stone",
            author:"J.K. Rowling",
            genres: "Novel, Children's literature, Fantasy Fiction, High fantasy",
            img:'harry.jpg'
        }
    ];

    booksRouter.get('/',function(req, res){
        res.render("books",{
            nav,
            title:'Books',
            books
        })
    });

    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('book',{
            nav,
            title: books[id].title,
            book: books[id]
        })
    });

    return booksRouter;

}

module.exports = router;