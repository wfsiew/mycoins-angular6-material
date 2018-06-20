var express = require('express');
var app = express();
var coinRoutes = express.Router();

var Coin = require('../models/Coin');

coinRoutes.route('/add').post(function (req, res) {
  var coin = new Coin(req.body);
  coin.save().then(k => {
    res.status(200).json({ 'coin': 'Coin added successfully' });
  })
  .catch(err => {
    res.status(400).send('Unable to save to database');
  })
});

coinRoutes.route('/').get(function (req, res) {
  Coin.find(function (err, coins) {
    if (err) {
      console.log(err);
    }

    else {
      res.json(coins);
    }
  });
});

coinRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Coin.findById(id, function (err, coin) {
    res.json(coin);
  });
});

coinRoutes.route('/update/:id').post(function (req, res) {
  var id = req.params.id;
  Coin.findById(id, function (err, coin) {
    if (!coin) {
      return next(new Error('Could not load Document'));
    }

    else {
      coin.name = req.body.name;
      coin.price = req.body.price;

      coin.save().then(k => {
        res.json('Update complete');
      })
      .catch(err => {
        res.status(400).send('Unable to update the database');
      });
    }
  });
});

coinRoutes.route('/delete/:id').get(function (req, res) {
  Coin.findByIdAndRemove({ _id: req.params.id }, function (err, coin) {
    if (err) {
      res.json(err);
    }

    else {
      res.json('Successfully removed')
    }
  });
});

module.exports = coinRoutes;