'use strict';


var mongoose = require('mongoose'),
  Latka = mongoose.model('Latky');

exports.list_all_latky = function(req, res) {
    Latka.find({}, function(err, latka) {
    if (err)
      res.send(err);
    res.json(latka);
  });
};




exports.create_a_latka = function(req, res) {
  var new_latka = new Latka(req.body);
  new_latka.save(function(err, latka) {
    if (err)
      res.send(err);
    res.json(latka);
  });
};


exports.read_a_latka = function(req, res) {
  Latka.findById(req.params.latkaId, function(err, latka) {
    if (err)
      res.send(err);
    res.json(latka);
  });
};


exports.update_a_latka = function(req, res) {
  Latka.findOneAndUpdate({_id: req.params.latkaId}, req.body, {new: true}, function(err, latka) {
    if (err)
      res.send(err);
    res.json(latka);
  });
};


exports.delete_a_latka = function(req, res) {


  Latka.remove({
    _id: req.params.latkaId
  }, function(err, latka) {
    if (err)
      res.send(err);
    res.json({ message: 'Latka successfully deleted' });
  });
};
