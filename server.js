var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./config/db'),
coinRoutes = require('./expressRoutes/coinRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => { console.log('Database is connected') },
  err => { console.log('Connect database error: ' + err) }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/coins', coinRoutes);
var port = process.env.PORT || 9000;

var server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});