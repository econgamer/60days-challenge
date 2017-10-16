const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validators = require('mongoose-validators');


const userreg = new Schema({
  name: {
    type: String,
    required: true
  }


});

const Userreg = mongoose.model('userreg', userreg);



module.exports = Userreg;
