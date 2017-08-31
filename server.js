//Login System

var path = require('path');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var mongo = require('mongodb');


// end of login system

const express = require('express');
const hbs = require('hbs');

var bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index.hbs', {});
});


// Day 4 - Donation Box
const User = require('./public/day4/donationBox/user');

var connectionUrl = 'mongodb://admin:admin@ds155091.mlab.com:55091/databasetesting';

mongoose.connect(connectionUrl);
mongoose.connection.once('open', () => console.log('Database is ready!'))
                    .on('error', (error) => {
                      console.warn('Warning, error');
                    });

app.use(bodyParser.urlencoded({ extended: false }));


app.post('/donate', function(req, res){
  const mic = new User({ name: req.body.name, amount: req.body.donationAmount });
  mic.save().then(() => {
    User.find({}).sort({amount : -1}).limit(1).exec(function (err, highest) {

      User.find({}).exec(function (err, recently) {
        res.render('donation.hbs', {
          name: highest[0].name,
          amount: highest[0].amount,
          rname: recently[recently.length - 1].name,
          ramount: recently[recently.length - 1].amount
        });
      });


    });
  }, (err) => {
    res.render('maintenance.hbs');
  });

});

// End of Day 4




// Day 18 - Image Gallery
const Url = require('./public/day18/favouriteUrl/url');

app.get('/favouriteUrl', (req, res) => {
    Url.find({}).exec(function(err, data){
      res.render('favUrl.hbs', {
        name: data
      });
    });
  }, (err) => {
    res.render('maintenance.hbs');

});



app.post('/favouriteUrl', (req, res) => {
  const linkShared = new Url({ name: req.body.link, description: req.body.desc});
  linkShared.save().then(() => {
      Url.find({}).exec(function(err, data){
        res.render('favUrl.hbs', {
          name: data
        });
      });
    }, (err) => {
      res.render('maintenance.hbs');
    });
});

// End of day 18


// day 22 - login system

var routes = require('./public/day22/loginSystem/index.js');
var users = require('./public/day22/loginSystem/users.js');


// app.use(bodyParser.json());
app.use(cookieParser());  //some said it is insecure

// for security
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));


// for express handling form validationErrors
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.'),
        root      = namespace.shift(),
        formParam = root;

    while(namespace.length){
      formParam += '[' + namespace.shift() + ']';
    }

    return{
      param: formParam,
      msg  : msg,
      value: value
    };
  }
}));


//passport init
app.use(passport.initialize());
app.use(passport.session());

// The flash is a special area of the session used for storing messages.
// Messages are written to the flash and cleared after being displayed to the user.
// The flash is typically used in combination with redirects,
// ensuring that the message is available to the next page that is to be rendered.
app.use(flash());

//set up global variables
app.use(function (req, res, next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

app.use('/day22/loginSystem', routes);
app.use('/day22/loginSystem/users', users);


//end of login system

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
