var express = require('express');
var router = express.Router();

/*
 * BRANCHING FOR ELIGIBILITY
 *
 * Current sequence is
 *  1. Residence
 *  2. Working
 *    2.1 Working over 16 hours
 *  3. Contributions
 *  4. Eligible
 * */

/*
 * THE INELIGIBILITY PAGES
 *
 * 1. ineligible-more-than-16-hours =
 * The citizen is working over 16 hours per week
 *
 * 2. ineligibile-residency =
 * The citizen doesn't live in England, Scotland or Wales
 *
 * 3. ineligible == 
 * The citizen hasn't contributed enough NI
 *
 * Please note: the content of page number 3 should be copied to the other two
 * */

// after residence we do working
router.get('/working', function (req, res) {
  var residence = req.query.eligibilityResidence;
  if (residence === 'eligibility-residence-no') {
    res.redirect('/v1_4-citizen/1-eligibility/ineligible-residency');
  } else {
    res.render('v1_4-citizen/1-eligibility/working');
  }
});

// after working we do working over
router.get('/working-over', function (req, res) {
  var working = req.query.eligibilityWorking;
  if (working === 'eligibility-working-no') {
    res.redirect('/v1_4-citizen/1-eligibility/contributions');
  } else {
    res.render('v1_4-citizen/1-eligibility/working-over');
  }
});

// after working over we do contributions
router.get('/contributions', function (req, res) {
  var workingOver = req.query.eligibilityWorkingOver;
  if (workingOver === 'eligibility-working-over-yes') {
    res.redirect('/v1_4-citizen/1-eligibility/ineligible-more-than-16-hours');
  } else {
    res.render('v1_4-citizen/1-eligibility/contributions');
  }
});

// after contributions we do eligible
router.get('/eligible', function (req, res) {
  var contributions = req.query.eligibilityContributions;
  if (contributions === 'eligibility-contributions-no') {
    res.redirect('/v1_4-citizen/1-eligibility/ineligible');
  } else {
    res.render('v1_4-citizen/1-eligibility/eligible');
  }
});

module.exports = router;
