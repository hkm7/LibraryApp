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
    },
    {
        link:'/signup', name:'Sign Up'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authR = require('./src/routes/authRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);

app.use(express.static('./public'));

app.use('/books',booksRouter);
app.use('/authors',authR);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);

app.set('view engine','ejs');
app.set('views', './src/views');

app.get('/', function(req, res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

app.listen(8080);