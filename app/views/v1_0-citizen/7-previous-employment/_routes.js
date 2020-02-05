const express = require('express');
const router = express.Router();

const MAX_PREVIOUS_JOBS = 4;

const BASE_PATH = 'v1_0-citizen/7-previous-employment';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/v1_0-citizen/8-abroad';

/*
 * Branching for previous employment
 * */

// Redirect /previous-employment to first question in sequence
router.get('/', function (req, res) {
  res.redirect('/v1_0-citizen/7-previous-employment/job-ended-last-six-months');
});

// after last six months we do when employer
router.get('/when-employer', function (req, res) {
  var lastSixMonths = req.query.peLastSixMonths;
  if (lastSixMonths === 'pe-last-six-months-no') {
    res.redirect(NEXT_PATH);
  } else {
    res.render('v1_0-citizen/7-previous-employment/when-employer');
  }
});

router.get('/employer-limit-warning', function (req, res) {
  res.render(`${BASE_PATH}/employer-limit-warning`, {
    maxPreviousJobs: MAX_PREVIOUS_JOBS.toString()
  });
});

router.get('/expect-payment', function (req, res) {
  const peExpectPayment = req.query.peExpectPayment;

  if (!peExpectPayment) {
    res.render(`${BASE_PATH}/expect-payment`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/self-employed-or-company-director`);
  }
});

router.post('/self-employed-or-company-director', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/another-job-ended-last-six-months`);
});

router.post('/who-pays', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/another-job-ended-last-six-months`);
});

router.post('/address', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/contact`);
});

router.post('/contact', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/expect-payment`);
});

router.post('/another-job-ended-last-six-months', function (req, res) {
  const answer = req.body.peAnotherLastSixMonths;
  if (answer === 'yes') {
    res.redirect(`${ABS_BASE_PATH}/when-employer`);
  } else {
    res.redirect(NEXT_PATH);
  }
});

module.exports = router;
