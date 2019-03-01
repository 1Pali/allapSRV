var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Predmet = require('./api/models/predmetyModel'), //created model loading here
  Kategoria = require('./api/models/kategorieModel'),
  Latka = require('./api/models/latkyModel'),
  bodyParser = require('body-parser'),
  mongodb = require("mongodb"),
  ObjectID = mongodb.ObjectID
// mongoose instance connection url connection
 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://heroku_cxsw3l8r:j5cp4afhebhkfldughscuhlkif@ds163226.mlab.com:63226/heroku_cxsw3l8r'); 

// mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongolab-curly-19764", function (err, client) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//   console.log("Database connection ready");
// });

var routes = require('./api/routes/allapRoutes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('ALLAP RESTful API server started on: ' + port);