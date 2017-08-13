var express = require('express');
//var path = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./user');

const port = process.env.PORT || 3000;
var connectionUrl = 'mongodb://admin:admin@ds155091.mlab.com:55091/databasetesting';

mongoose.connect(connectionUrl);
mongoose.connection.once('open', () => console.log('Database is ready!'))
                    .on('error', (error) => {
                      console.warn('Warning, error');
                    });

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(__dirname));

app.post('/donate', function(req, res){
  const mic = new User({ name: req.body.name, amount: req.body.donationAmount });
  mic.save();

  //res.send('Data received' + JSON.stringify(req.body));
  res.send('Data received' + JSON.stringify(req.body));

});

app.get('/list', function(req, res){
  User.find({}, function (err, docs) {
    docs.map((doc) => {
      res.send('Data received' + JSON.stringify(doc));
    });
  });
});



app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
