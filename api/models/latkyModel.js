'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LatkaSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the name of the latka'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Latky', LatkaSchema);