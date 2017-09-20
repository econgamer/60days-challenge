const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validators = require('mongoose-validators');


const poll = new Schema({
  vote: {
    type: Number,
    required: true
  }

});

const Poll = mongoose.model('poll', poll);



module.exports = Poll;
