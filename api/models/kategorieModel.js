'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var KategoriaSchema = new Schema({
  id: {
    type: Number,
    required: 'Kindly enter the id of the kategoria'
  },
  title: {
    type: String,
    required: 'Kindly enter the name of the kategoria'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  PredmetId:{
    type: String,
    required: 'Kindly enter the predmetId of the kategoria'
  }
});

module.exports = mongoose.model('Kategorie', KategoriaSchema);