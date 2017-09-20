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




// Day 18 - Url Gallery
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


// Day 23 - My contact
const Contact = require('./public/day24/myContact/contact');

app.get('/myContact', (req, res) => {
    Contact.find({}).exec(function(err, data){
      res.render('contact.hbs', {
        name: data
      });
    });
  }, (err) => {
    res.render('maintenance.hbs');

});



app.post('/myContact', (req, res) => {
  const contactPerson = new Contact({ name: req.body.name, description: req.body.desc});
  contactPerson.save().then(() => {
      Contact.find({}).exec(function(err, data){
        res.render('contact.hbs', {
          name: data
        });
      });
    }, (err) => {
      res.render('maintenance.hbs');
    });
});

// End of day 23





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



// Day 33 - review system
const gameReview = require('./public/day33/gameReview');

app.get('/gameReview', (req, res) => {
    gameReview.find({}).exec(function(err, data){
      res.render('gameReview.hbs', {
        name: data
      });
    });
  }, (err) => {
    res.render('maintenance.hbs');
});


// Create new Review
app.post('/gameReview', (req, res) => {
  console.log(req.body);
  const newReview = new gameReview({ name: req.body.name, description: req.body.desc, recommendation: req.body.store, token: req.body.token});
  newReview.save().then(() => {
      gameReview.find({}).exec(function(err, data){
        res.render('gameReview.hbs', {
          name: data
        });
      });
    }, (err) => {
      res.render('maintenance.hbs');
    });
});

// Update existing review
app.post('/gameReviewdelete', (req, res) => {
  gameReview.findOneAndRemove({ token: req.body.token, _id: req.body.id})
  .then(() => {
      res.redirect('/gameReview');
      // gameReview.find({}).exec(function(err, data){
      //   res.render('gameReview.hbs', {
      //     name: data
      //   });
      // });
    }, (err) => {
      res.render('maintenance.hbs');
    });

});

// End of review system



// Day 37
const nodemailer = require('nodemailer');

app.get('/happyFace', (req, res) => {
    res.render('happyFace.hbs', {

    });
});


app.post('/happyFace', (req, res) => {
  const output = `
    <h1>Someone sent you a happy face</h1>
    <img src="https://www.w3schools.com/tags/smiley.gif" alt="Smiley face">
  `;



  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', //smtp server
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'michaelyeung93@gmail.com', // generated ethereal user
            pass: '51461273'  // generated ethereal password
        },
        tls:{
          rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Michael" <michaelyeung93@gmail.com>', // sender address
        to: `${req.body.email}`, // list of receivers
        subject: 'Happy Face', // Subject line
        text: 'Someone send you a happy face', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        res.render('happyFace.hbs', {msg: 'Happy face has been sent'});
    });



});

// End of day 37


// day 42

app.use(session({
    cookieName: 'session',
    secret: "hello",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }

}));



const poll = require('./public/day42/poll');

app.get('/poll', (req, res) => {
    console.log('Session before: ' + req.session.user);


      res.render('pollingapp.hbs', {

      });


});


// Create new Review
app.post('/poll', (req, res) => {
  console.log(req.body);


  if(req.session.user === undefined){
    const newpoll = new poll({ vote: req.body.vote});
    newpoll.save().then(() => {

        // session an cookie handling
        req.session.user = newpoll;
        req.session.cookie.expires = new Date(Date.now() + 2 * 60 * 1000);

        //

        console.log('Session after vote: ' + req.session.user);

        poll.find({}).exec(function(err, data){
          console.log('Data pass to font ' , data);
          res.render('pollingapp.hbs', {
            result: data
          });
        });
      }, (err) => {
        res.render('maintenance.hbs');
      });
  }else{
    res.render('pollingapp.hbs', {
      message: 'You have just voted'
    });
  }


});





// end of day 42















app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
