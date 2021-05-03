const express = require('express');
const booksRouter = express.Router();

function router(nav){   

    var books = [
        {
            title: 'The Midnight Library',
            author: 'Matt Haig',
            genres: 'Science Fiction, Fantasy Fiction, Philosophical fiction',
            img:'midnight.jpg',
            bio:"Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices . . . Would you have done anything different, if you had the chance to undo your regrets? A dazzling novel about all the choices that go into a life well lived, from the internationally bestselling author of Reasons to Stay Alive and How To Stop Time. Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life. While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better? In The Midnight Library, Matt Haig’s enchanting new novel, Nora Seed finds herself faced with this decision. Faced with the possibility of changing her life for a new one, following a different career, undoing old breakups, realizing her dreams of becoming a glaciologist; she must search within herself as she travels through the Midnight Library to decide what is truly fulfilling in life, and what makes it worth living in the first place."
        },
        {
            title: 'Becoming',
            author: 'Michelle Obama',
            genres: 'Memoir',
            img:'becoming.jpg',
            bio:'Becoming is the memoir of former First Lady of the United States Michelle Obama, published in 2018.12 Described by the author as a deeply personal experience,3 the book talks about her roots and how she found her voice, as well as her time in the White House, her public health campaign, and her role as a mother.4 The book is published by Crown and was released in 24 languages.4 One million copies were donated to First Book, an American nonprofit organization which provides books to children. It was the highest-selling book published in the United States in 2018, setting the record 15 days after its publication, with over two million copies sold.'
        },
        {
            title:"Harry Potter and the Philosopher's Stone",
            author:"J.K. Rowling",
            genres: "Novel, Children's literature, Fantasy Fiction, High fantasy",
            img:'harry.jpg',
            bio:"Harry Potter and the Philosophers Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowlings debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harrys parents, but failed to kill Harry when he was just 15 months old. The book was first published in the United Kingdom on 26 June 1997 by Bloomsbury. It was published in the United States the following year by Scholastic Corporation under the title Harry Potter and the Sorcerers Stone. It won most of the British book awards that were judged by children and other awards in the US. The book reached the top of the New York Times list of best-selling fiction in August 1999 and stayed near the top of that list for much of 1999 and 2000. It has been translated into at least 73 other languages, and has been made into a feature-length film of the same name, as have all six of its sequels. The novel has sold in excess of 120 million copies. Most reviews were very favourable, commenting on Rowlings imagination, humour, simple, direct style and clever plot construction, although a few complained that the final chapters seemed rushed. The writing has been compared to that of Jane Austen, one of Rowlings favourite authors; Roald Dahl, whose works dominated childrens stories before the appearance of Harry Potter; and the Ancient Greek story-teller Homer. While some commentators thought the book looked backwards to Victorian and Edwardian boarding school stories, others thought it placed the genre firmly in the modern world by featuring contemporary ethical and social issues, as well as overcoming obstacles like bullies."
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