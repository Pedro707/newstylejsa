var express = require('express');
var router = express.Router();

/*
 * Branching for eligibility
 * Current sequence is
 *  1. Residence
 *  2. Age
 *  3. Working
 *    3.1 Working over 16 hours
 *  4. Contributions
 *  5. Seeking --> NO
 *  6. Eligible
 * */

// Redirect /eligibility to first question in sequence
router.get('/', function (req, res) {
  res.redirect('/v1_0-citizen/1-eligibility/residence');
});

// after residence we do age
router.get('/age', function (req, res) {
  var residence = req.query.eligibilityResidence;
  if (residence === 'eligibility-residence-no') {
    res.redirect('/v1_0-citizen/1-eligibility/ineligible-residency');
  } else {
    res.render('v1_0-citizen/1-eligibility/age');
  }
});

// after age we do working
router.get('/working', function (req, res) {
  var age = req.query.eligibilityAge;
  if (age === 'eligibility-age-no') {
    res.redirect('/v1_0-citizen/1-eligibility/ineligible-16-17');
  } else {
    res.render('v1_0-citizen/1-eligibility/working');
  }
});

// after working we do working over
router.post('/working-over', function (req, res) {
  var working = req.body.eligibilityWorkingOver;
  if (working === 'yes') {
    res.redirect('/v1_0-citizen/1-eligibility/ineligible-more-than-16-hours');
  } else {
    res.render('v1_0-citizen/1-eligibility/seeking');
  }
});

// two routes into contributions
router.get('/contributions', function (req, res) {
  var seeking = req.query.eligibilitySeeking;
  var workingOver = req.query.eligibilityWorkingOver;
  if (seeking === 'eligibility-seeking-no') {
    res.redirect('/v1_0-citizen/1-eligibility/ineligible-not-looking-for-work');
  } else {
    res.render('v1_0-citizen/1-eligibility/contributions');
  }
});

router.get('/seeking', function (req, res) {
  var working = req.query.eligibilityWorking;
  if (working === 'eligibility-working-yes') {
    res.redirect('/v1_0-citizen/1-eligibility/working-over');
  } else {
    res.render('v1_0-citizen/1-eligibility/seeking');
  }
});

// after contributions we do eligible
router.get('/eligible', function (req, res) {
  var contributions = req.query.eligibilityContributions;
  if (contributions === 'eligibility-contributions-no') {
    req.session.ineligibleReason = 'no-contributions';
    var ineligibleReason = req.session.ineligibleReason;
    res.redirect('/v1_0-citizen/1-eligibility/ineligible');
  } else {
    res.render('v1_0-citizen/1-eligibility/eligible');
  }
});

module.exports = router;
