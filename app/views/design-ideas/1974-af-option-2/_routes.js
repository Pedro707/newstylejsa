var express = require('express');
var router = express.Router();

const BASE_PATH = 'design-ideas/1974-af-option-2';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/design-ideas/1974-af-option-2';

router.post('/start-date', function (req, res) {
  var answer = req.session.data['claimstart'];

  if (answer === 'yes') {
    // Yes, I want my claim to start from today {current-date}
    res.redirect(`${NEXT_PATH}/nino`);
  } else {
    // No, I want my claim to start from an earlier date
    res.redirect(`${ABS_BASE_PATH}/nino`);
  };
});

router.post('/guard', function (req, res) {
  var answer = req.session.data['altFormat'];
  if (answer === 'alt-format-no') {
    res.redirect(`${ABS_BASE_PATH}/address`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/alt-format-yes`);
  }
});

router.post('/add-different-postal-address', function (req, res) {
  const answer = req.body.detailsAddDifferentPostalAddress;

  if (answer === 'add-different-postal-address-no') {
    res.redirect(`${ABS_BASE_PATH}/contact-phone`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/address-postal-address`);
  }
});

router.post('/contact-phone', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/contact-do-you-have-an-email`);
});

router.post('/contact-do-you-have-an-email', function (req, res) {
  const answer = req.body.contactDoYouHaveAnEmail;

  if (typeof answer !== 'undefined') {
    if (answer === 'Yes') {
      res.redirect(`${ABS_BASE_PATH}/contact-email`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/bank-account`);
    }
  } else {
    res.redirect(`${ABS_BASE_PATH}/contact-do-you-have-an-email`);
  }
});



module.exports = router;
