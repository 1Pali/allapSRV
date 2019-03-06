'use strict';
module.exports = function(app) {
  var predmetyList = require('../controllers/predmetyController');
  var kategorieList = require('../controllers/kategorieController');
  var latkyList = require('../controllers/latkyController');

  // todoList Routes
  app.route('/predmety')
    .get(predmetyList.list_all_predmety)
    .post(predmetyList.create_a_predmet);

  app.route('/predmety/:predmetTitle')
    .get(predmetyList.list_req_predmety)

  app.route('/predmety/:predmetId')
    .get(predmetyList.read_a_predmet)
    .put(predmetyList.update_a_predmet)
    .delete(predmetyList.delete_a_predmet);

  app.route('/kategorie')
    .get(kategorieList.list_all_kategorie)
    .post(kategorieList.create_a_kategoria);

  app.route('/kategorie/:predmetId')
    .get(predmetyList.list_req_kategorie)

  app.route('/kategorie/:kategoriaId')
    .get(kategorieList.read_a_kategoria)
    .put(kategorieList.update_a_kategoria)
    .delete(kategorieList.delete_a_kategoria);

  app.route('/latky')
    .get(latkyList.list_all_latky)
    .post(latkyList.create_a_latka);

  app.route('/latky/:kategoriaId')
    .get(predmetyList.list_req_latky)

  app.route('/latky/:latkaId')
    .get(latkyList.read_a_latka)
    .put(latkyList.update_a_latka)
    .delete(latkyList.delete_a_latka);
};