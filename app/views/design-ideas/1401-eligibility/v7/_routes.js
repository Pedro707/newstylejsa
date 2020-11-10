var express = require('express');
var router = express.Router();

const BASE_PATH = 'design-ideas/1401-eligibility/v7';
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

// after residence we do working
router.get('/working', function (req, res) {
  var residence = req.query.eligibilityResidence;
  if (residence === 'eligibility-residence-no') {
    res.redirect('/design-ideas/1401-eligibility/v7/ineligible-residency');
  } else {
    res.render('design-ideas/1401-eligibility/v7/working');
  }
});

// after working we do working over
router.get('/working-over', function (req, res) {
  var working = req.query.eligibilityWorking;
  if (working === 'eligibility-working-no') {
    res.redirect('/design-ideas/1401-eligibility/v7/contributions');
  } else {
    res.render('design-ideas/1401-eligibility/v7/working-over');
  }
});

// after working over we do contributions
router.get('/contributions', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/fcc1`);
});
router.post('/fcc1', function (req, res) {
  var answer = req.session.data['eligibilityFcc1'];
  if (answer === 'eligibility-fcc1-yes') {
    res.redirect('/design-ideas/1401-eligibility/v7/scc1');
  } else {
    res.redirect('/design-ideas/1401-eligibility/v7/fcc2');
  }
});

router.post('/fcc2', function (req, res) {
  var answer = req.session.data['eligibilityFcc2'];
  if (answer === 'eligibility-fcc2-yes') {
    res.redirect('/design-ideas/1401-eligibility/v7/scc1');
  } else {
    res.redirect('/design-ideas/1401-eligibility/v7/ec1');
  }
});

router.post('/scc1', function (req, res) {
  var answer = req.session.data['eligibilityScc1'];
  if (answer === 'eligibility-scc1-yes') {
    res.redirect('/design-ideas/1401-eligibility/v7/scc2');
  } else {
    res.redirect('/design-ideas/1401-eligibility/v7/b1');
  }
});

router.post('/scc2', function (req, res) {
  var answer = req.session.data['eligibilityScc2'];
  if (answer === 'eligibility-scc2-yes') {
    res.redirect('/design-ideas/1401-eligibility/v7/eligible');
  } else {
    res.redirect('/design-ideas/1401-eligibility/v7/b2');
  }
});

router.post('/b1', function (req, res) {
  var answer = req.session.data['eligibilityB1'];
  if (answer === 'eligibility-b1-yes') {
    res.redirect('/design-ideas/1401-eligibility/v7/scc2');
  } else {
    res.redirect('/design-ideas/1401-eligibility/v7/ec1');
  }
});

router.post('/b2', function (req, res) {
  var answer = req.session.data['eligibilityB2'];
  if (answer === 'eligibility-b2-yes') {
    res.redirect('/design-ideas/1401-eligibility/v7/eligible');
  } else {
    res.redirect('/design-ideas/1401-eligibility/v7/ec1');
  }
});

router.post('/ec1', function (req, res) {
  var answer = req.session.data['eligibilityEc1'];
  if (answer === 'eligibility-ec1-yes') {
    res.redirect('/design-ideas/1401-eligibility/v7/eligible');
  } else {
    res.redirect('/design-ideas/1401-eligibility/v7/ec2');
  }
});

router.post('/ec2', function (req, res) {
  var answer = req.session.data['eligibilityEc2'];
  if (answer === 'eligibility-ec2-yes') {
    res.redirect('/design-ideas/1401-eligibility/v7/eligible');
  } else {
    res.redirect('/design-ideas/1401-eligibility/v7/ineligible');
  }
});

// after contributions we do eligible
router.get('/eligible', function (req, res) {
  var contributions = req.query.eligibilityContributions;
  if (contributions === 'eligibility-contributions-no') {
    res.redirect('/design-ideas/1401-eligibility/v7/ineligible');
  } else {
    res.render('design-ideas/1401-eligibility/v7/eligible');
  }
});

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
    res.redirect('/design-ideas/1401-eligibility/v7/working');
  }
});
router.post('/ineligible-more-than-16-hours', function (req, res) {
  var answer = req.session.data['eligibilityDoNext'];
  if (answer === 'do-next-other') {
    res.redirect('https://www.gov.uk/benefits-calculators');
  } else {
    res.redirect('/design-ideas/1401-eligibility/v7/contributions');
  }
});
module.exports = router;
