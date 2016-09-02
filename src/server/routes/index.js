const express = require('express');
const router = express.Router();
const contactObj= require('../lib/data').all;

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Express!';
  indexController.sum(1, 6, (error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.sum = results;
      res.render('index', renderObject);
    }
  });
});

router.get('/contacts', function (req, res, next) {
  res.render('contacts', {contacts: contactObj} );
});

module.exports = router;
