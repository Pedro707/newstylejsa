const express = require('express');
const router = express.Router();
//const pensionTracker = require('pension-tracker');

const LIMIT_WARNING_PATH = '/v1_1-citizen/9-pensions/limit-warning';
const BASE_PATH = 'v1_1-citizen/9-pensions/9b-deferred-pension';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/v1_1-citizen/9-pensions/9c-future-pension';

// Track which type of pension the user is interacting with
router.all('/*', function (req, res) {
  //pensionTracker.setCurrentType(pensionTracker.PENSION_TYPES.DEFERRED);
  req.next();
});

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/guard`);
});

router.post('/guard', function (req, res) {
  const answer = req.body.deferredPensionGuard;

  if (typeof answer !== 'undefined') {
    if (answer === 'deferred-pension-guard-yes') {
      //if (pensionTracker.reachedMax()) {
      //  res.redirect(LIMIT_WARNING_PATH);
      //} else {
        res.redirect(`${ABS_BASE_PATH}/provider-name`);
      //}
    } else {
      res.redirect(NEXT_PATH);
    }
  } else {
    res.redirect(`${ABS_BASE_PATH}/guard`);
  }
});

router.post('/when-start', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/payment-frequency`);
});

router.post('/payment-frequency', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/another-one`);
});

router.post('/provider-name', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/provider-address`);
});

router.post('/provider-address', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/payment-frequency`);
});

router.post('/another-one', function (req, res) {
  const answer = req.body.deferredPensionAnotherOne;

  if (typeof answer !== 'undefined') {
    //pensionTracker.add();

    if (answer === 'deferred-pension-another-one-yes') {
      //if (pensionTracker.reachedMax()) {
      //  res.redirect(LIMIT_WARNING_PATH);
      //} else {
        res.redirect(`${ABS_BASE_PATH}/provider-name`);
      //}
    } else {
      res.redirect(NEXT_PATH);
    }
  } else {
    res.redirect(`${ABS_BASE_PATH}/another-one`);
  }
});

module.exports = router;
