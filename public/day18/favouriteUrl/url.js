const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validators = require('mongoose-validators');


const UrlSchema = new Schema({
  name: {
    type: String,
    validate: validators.isURL({require_protocol: true}),
    required: true
  },

  description: {
    type: String
  }

});

const Url = mongoose.model('url', UrlSchema);



module.exports = Url;
