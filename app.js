const express = require('express');
const app = express();
var session = require('express-session')
// const port = process.env.PORT || 8080;

const sessTime= 2*60*60*1000;
const {
    PORT=8080,
    NODE_ENV = 'development',
    SESS_NAME='sid',
    SESS_SECRET= 'ssh!quiet,it\'asecret!',
    SESS_LIFETIME= sessTime
} = process.env;

const IN_PROD = NODE_ENV ==='production';

var nav = [
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
    },
    {
        link:'/edit', name:'Admin'
    },
    {
        link:'/logout', name:'Logout'
    }
];


const redirectLogin = (req, res, next) =>{
    if(!req.session.userId){
        res.redirect('/login');
    }
    else{
        next()
    }
}

const redirectHome = (req, res, next) =>{
    if(req.session.userId){
        res.redirect('/');
    }
    else{
        next()
    }
}


const booksRouter = require('./src/routes/bookRoutes')(nav);
const authR = require('./src/routes/authRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav,redirectHome);
const signupRouter = require('./src/routes/signupRoutes')(nav,redirectHome);
const adminRouter = require('./src/routes/adminRoutes')(nav,redirectLogin);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie:{
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    }
}));

app.use('/books',booksRouter);
app.use('/authors',authR);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/edit',adminRouter);

app.set('view engine','ejs');
app.set('views', './src/views');

app.get('/', function(req, res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

app.get('/logout', redirectLogin, function(req, res){
    req.session.destroy(err =>{
        if(err){
            return res.redirect('/');
        }
        res.clearCookie(SESS_NAME);
        res.redirect('/login');
    });
});


app.listen(PORT);