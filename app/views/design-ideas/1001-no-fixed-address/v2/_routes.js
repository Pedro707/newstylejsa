var express = require('express');
var router = express.Router();


const BASE_PATH = 'design-ideas/1001-no-fixed-address/v2';
const ABS_BASE_PATH = `/${BASE_PATH}`;


router.post('/address', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/address-is-it-postal`);
});

router.post('/address-is-it-postal', function (req, res) {
  var answer = req.session.data['detailsAddDifferentPostalAddress'];
  if (answer === 'add-different-postal-address-yes') {
    res.redirect(`${ABS_BASE_PATH}/address-postal-address`);
  } else {
    res.redirect('/v1_4-citizen/3-details/contact-phone');
  }
});

module.exports = router;
