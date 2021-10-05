var express = require('express');
var router = express.Router();

const BASE_PATH = 'design-ideas/1974-af-option-1';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/design-ideas/1974-af-option-1';

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


router.post('/add-different-postal-address', function (req, res) {
  const answer = req.body.detailsAddDifferentPostalAddress;

  if (answer === 'add-different-postal-address-no') {
    res.redirect(`${ABS_BASE_PATH}/contact-phone-af`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/address-postal-address`);
  }
});

router.post('/contact-phone', function (req, res) {
var answer = req.session.data['contact-telephone-number-af'];

  if (answer === 'yes') {
  res.redirect(`${ABS_BASE_PATH}/contact-phone-af-yes`);
} else {
  res.redirect(`${ABS_BASE_PATH}/contact-do-you-have-an-email`);
}
});

router.post('/address-af', function (req, res) {
var answer = req.session.data['address-af'];

  if (answer === 'yes') {
  res.redirect(`${ABS_BASE_PATH}/address-af-yes`);
} else {
  res.redirect(`${ABS_BASE_PATH}/address-is-it-postal`);
}
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
