var express = require('express');
var router = express.Router();

const BASE_PATH = 'design-ideas/1401-eligibility/Jan';
const ABS_BASE_PATH = `/${BASE_PATH}`;

// Redirect to first question in sequence
router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/introduction`);
});

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

router.post('/residence', function (req, res) {
  var answer = req.session.data['eligibilityResidence'];
  if (answer === 'eligibility-residence-no') {
    res.redirect(`${ABS_BASE_PATH}/ineligible-residency`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/working`);
  }
});

// after residence we do working
router.post('/working', function (req, res) {
  var answer = req.session.data['eligibilityWorking'];
  if (answer === 'eligibility-working-no') {
    res.redirect(`${ABS_BASE_PATH}/contributions`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/working-over`);
  }
});

// after working we do working over
router.post('/working-over', function (req, res) {
  var answer = req.session.data['eligibilityWorkingOver'];
  if (answer === 'eligibility-working-over-no') {
    res.redirect(`${ABS_BASE_PATH}/contributions`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/ineligible-more-than-16-hours`);
  }
});

// after working over we do contributions
router.post('/contributions', function (req, res) {
  var answer = req.session.data['eligibilityContributions'];
  if (answer === 'eligibility-contributions-no') {
    res.redirect(`${ABS_BASE_PATH}/ineligible`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/eligible`);
  }
});

// Ineligibility journey continues
router.post('/ineligible', function (req, res) {
  var answer = req.session.data['eligibilityDoNext'];
  if (answer === 'do-next-other') {
    res.redirect('https://www.gov.uk/benefits-calculators');
  } else {
    res.redirect('/v1_5-citizen/2-claim-start/start-date');
  }
});
router.post('/ineligible-residency', function (req, res) {
  var answer = req.session.data['eligibilityDoNext'];
  if (answer === 'do-next-other') {
    res.redirect('https://www.gov.uk/benefits-calculators');
  } else {
    res.redirect(`${ABS_BASE_PATH}/working`);
  }
});
router.post('/ineligible-more-than-16-hours', function (req, res) {
  var answer = req.session.data['eligibilityDoNext'];
  if (answer === 'do-next-other') {
    res.redirect('https://www.gov.uk/benefits-calculators');
  } else {
    res.redirect(`${ABS_BASE_PATH}/contributions`);
  }
});
module.exports = router;
