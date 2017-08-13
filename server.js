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
  // res.send('Data received' + JSON.stringify(req.body));


  // User.find({}, function (err, docs) {
  //   console.log(docs);
  //   res.render('donation.hbs',
  //    {name: docs,
  //     amount: docs});
  // });


});

// app.get('/day4/donationBox/2', function(req, res){
//   res.render('donation.hbs', {});
// });

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
