'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PredmetSchema = new Schema({
  id: {
    type: Number,
    required: 'Kindly enter the id of the predmet'
  },
  title: {
    type: String,
    required: 'Kindly enter the name of the predmet'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Predmety', PredmetSchema);