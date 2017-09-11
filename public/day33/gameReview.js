const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validators = require('mongoose-validators');


const gameReview = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  recommendation: {
    type: String
  },

  token:{
    type:String
  }

});

const GameReview = mongoose.model('gameReview', gameReview);



module.exports = GameReview;
