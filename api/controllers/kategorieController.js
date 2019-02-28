'use strict';


var mongoose = require('mongoose'),
  Kategoria = mongoose.model('Kategorie');

exports.list_all_kategorie = function(req, res) {
    Kategoria.find({}, function(err, kategoria) {
    if (err)
      res.send(err);
    res.json(kategoria);
  });
};




exports.create_a_kategoria = function(req, res) {
  var new_kategoria = new Kategoria(req.body);
  new_kategoria.save(function(err, kategoria) {
    if (err)
      res.send(err);
    res.json(kategoria);
  });
};


exports.read_a_kategoria = function(req, res) {
  Kategoria.findById(req.params.kategoriaId, function(err, kategoria) {
    if (err)
      res.send(err);
    res.json(kategoria);
  });
};


exports.update_a_kategoria = function(req, res) {
  Kategoria.findOneAndUpdate({_id: req.params.kategoriaId}, req.body, {new: true}, function(err, kategoria) {
    if (err)
      res.send(err);
    res.json(kategoria);
  });
};


exports.delete_a_kategoria = function(req, res) {


  Kategoria.remove({
    _id: req.params.kategoriaId
  }, function(err, kategoria) {
    if (err)
      res.send(err);
    res.json({ message: 'Kategoria successfully deleted' });
  });
};
