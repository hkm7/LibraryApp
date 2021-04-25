const express = require('express');
const app = express();
const nav = [
    {
        link:'/books', name:'Books'
    },
    {
        link:'/authors', name:'Authors'
    },
    {
        link:'/login', name:'Login'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authR = require('./src/routes/authRoutes')(nav);

app.use(express.static('./public'));
app.use('/books',booksRouter);
app.use('/authors',authR);
app.set('view engine','ejs');
app.set('views', './src/views');

app.get('/', function(req, res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

app.listen(5555);