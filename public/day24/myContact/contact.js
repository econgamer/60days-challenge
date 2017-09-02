const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validators = require('mongoose-validators');


const MyContact = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  }

});

const Contact = mongoose.model('mycontact', MyContact);



module.exports = Contact;
