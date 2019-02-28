'use strict';


var mongoose = require('mongoose'),
  Predmet = mongoose.model('Predmety');

exports.list_all_predmety = function(req, res) {
    Predmet.find({}, function(err, predmet) {
    if (err)
      res.send(err);
    res.json(predmet);
  });
};




exports.create_a_predmet = function(req, res) {
  var new_predmet = new Predmet(req.body);
  new_predmet.save(function(err, predmet) {
    if (err)
      res.send(err);
    res.json(predmet);
  });
};


exports.read_a_predmet = function(req, res) {
  Predmet.findById(req.params.predmetId, function(err, predmet) {
    if (err)
      res.send(err);
    res.json(predmet);
  });
};


exports.update_a_predmet = function(req, res) {
  Predmet.findOneAndUpdate({_id: req.params.predmetId}, req.body, {new: true}, function(err, predmet) {
    if (err)
      res.send(err);
    res.json(predmet);
  });
};


exports.delete_a_predmet = function(req, res) {


  Predmet.remove({
    _id: req.params.predmetId
  }, function(err, predmet) {
    if (err)
      res.send(err);
    res.json({ message: 'Predmet successfully deleted' });
  });
};
