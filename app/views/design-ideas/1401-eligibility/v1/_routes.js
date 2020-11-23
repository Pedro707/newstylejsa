var express = require('express');
var router = express.Router();


const BASE_PATH = 'design-ideas/1401-eligibility/v1';
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
 *  3. Employed
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
    res.redirect('/design-ideas/1401-eligibility/v1/ineligible-residency');
  } else {
    res.render('design-ideas/1401-eligibility/v1/working');
  }
});

// after working we do working over
router.get('/working-over', function (req, res) {
  var working = req.query.eligibilityWorking;
  if (working === 'eligibility-working-no') {
    res.redirect('/design-ideas/1401-eligibility/v1/employed');
  } else {
    res.render('design-ideas/1401-eligibility/v1/working-over');
  }
});

// after working over we do employed
router.get('/employed', function (req, res) {
  var workingOver = req.query.eligibilityWorkingOver;
  if (workingOver === 'eligibility-working-over-yes') {
    res.redirect('/design-ideas/1401-eligibility/v1/ineligible-more-than-16-hours');
  } else {
    res.render('design-ideas/1401-eligibility/v1/employed');
  }
});

// after employed we do eligible
router.get('/eligible', function (req, res) {
  var contributions = req.query.eligibilityContributions;
  if (contributions === 'eligibility-contributions-yes') {
    res.redirect('/design-ideas/1401-eligibility/v1/eligible');
  } else if (contributions === 'eligibility-contributions-no') {
    res.redirect('/design-ideas/1401-eligibility/v1/employed-previous-year');
  } else {
    res.render('design-ideas/1401-eligibility/v1/eligible');
  }
});

// router.post('/employed', function (req, res) {
//   var answer = req.session.data['eligibilityEmployed'];
//   if (answer === 'eligibility-employed-yes') {
//     res.redirect('/design-ideas/1401-eligibility/v1/eligible');
//   } else if (answer === 'eligibility-benefits-yes-some') {
//     res.redirect('/design-ideas/1401-eligibility/v1/ineligible');
//   } else {
//     res.render('design-ideas/1401-eligibility/v1/ineligible');
//   }
// });

router.get('/employed-previous-year', function (req, res) {
  var answerEmployed = req.session.data['eligibilityEmployed'];
  if (answerEmployed === 'eligibility-employed-yes') {
    res.redirect('/design-ideas/1401-eligibility/v1/eligible');
  } else {
    res.render('design-ideas/1401-eligibility/v1/employed-previous-year');
  }
});

router.post('/employed-previous-year', function (req, res) {
  var answerEmployed = req.session.data['eligibilityEmployed'];
  var answer = req.session.data['eligibilityEmployedPrevious'];
  if (answer === 'eligibility-employed-previous-yes' && answerEmployed === 'eligibility-employed-yes') {
    res.redirect('/design-ideas/1401-eligibility/v1/eligible');
  } else {
    res.render('design-ideas/1401-eligibility/v1/benefits');
  }
});

router.post('/benefits', function (req, res) {
  var answer = req.session.data['eligibilityBenefits'];
  if (answer === 'eligibility-benefits-yes-all') {
    res.redirect('/design-ideas/1401-eligibility/v1/eligible');
  } else if (answer === 'eligibility-benefits-yes-some') {
    res.redirect('/design-ideas/1401-eligibility/v1/ineligible');
  } else {
    res.render('design-ideas/1401-eligibility/v1/ineligible');
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
    res.redirect('/design-ideas/1401-eligibility/v1/working');
  }
});
router.post('/ineligible-more-than-16-hours', function (req, res) {
  var answer = req.session.data['eligibilityDoNext'];
  if (answer === 'do-next-other') {
    res.redirect('https://www.gov.uk/benefits-calculators');
  } else {
    res.redirect('/design-ideas/1401-eligibility/v1/employed');
  }
});

module.exports = router;
