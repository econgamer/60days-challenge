const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validators = require('mongoose-validators');


const food = new Schema({
  order: {
    type: String,
    required: true
  },

  amount: {
    type: Number
  }

});

const Food = mongoose.model('food', food);



module.exports = Food;
