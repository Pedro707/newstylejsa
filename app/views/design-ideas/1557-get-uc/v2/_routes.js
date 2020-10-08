const express = require('express');
const router = express.Router();

const BASE_PATH = 'design-ideas/1557-get-uc/v2';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/design-ideas/1557-get-uc/v2/continue';

// Redirect /education to first question in sequence
router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/guard`);
});

router.post('/guard', function (req, res) {
    res.redirect(`${ABS_BASE_PATH}/other-benefits`);
});

router.post('/other-benefits', function (req, res) {
  const answer = req.body.obAreYou;

  if (typeof answer !== 'undefined') {
    if (answer === 'ob-are-you-yes') {
      res.redirect(`${ABS_BASE_PATH}/what-other-benefits`);
    } else {
      res.redirect(NEXT_PATH);
    }
  } else {
    res.redirect(NEXT_PATH);
  }
});

router.post('/what-other-benefits', function (req, res) {
  res.redirect(NEXT_PATH);
});

module.exports = router;
