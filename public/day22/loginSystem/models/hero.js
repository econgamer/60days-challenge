const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// Hero Schema
const HeroSchema = new Schema({
  username: {
    type: String,
    index:true
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  name: {
    type: String
  }

});

//var User = module.exports = mongoose.model('hero', HeroSchema);
var Hero = mongoose.model('hero', HeroSchema);

module.exports = Hero;

Hero.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(newUser.password, salt, function(err, hash){
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}


Hero.getUserByUsername = function(username, callback){
  var query = {username: username};
  Hero.findOne(query, callback);
}

Hero.getUserById = function(id, callback){
  Hero.findById(id, callback);
}


Hero.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch){
    if(err) throw err;
    callback(null, isMatch);
  });
}
