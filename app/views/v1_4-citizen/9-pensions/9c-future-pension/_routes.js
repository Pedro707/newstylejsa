const express = require('express');
const app = express();
const router = express.Router();
//const pensionTracker = require('pension-tracker');

const LIMIT_WARNING_PATH = '/v1_4-citizen/9-pensions/limit-warning';
const BASE_PATH = 'v1_4-citizen/9-pensions/9c-future-pension';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/v1_4-citizen/10-education';

// Track which type of pension the user is interacting with
router.all('/*', function (req, res) {
  //pensionTracker.setCurrentType(pensionTracker.PENSION_TYPES.FUTURE);
  req.next();
});

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/guard`);
});

router.post('/guard', function (req, res) {
  const answer = req.body.futurePensionGuard;

  if (typeof answer !== 'undefined') {
    if (answer === 'future-pension-guard-yes') {
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

router.post('/provider-name', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/provider-address`);
});

router.post('/provider-address', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/do-you-know-when-starts`);
});

router.post('/do-you-know-when-starts', function (req, res) {
  app.locals.pensionsDetailsNoteShown = 0;
  const answer = req.body.futurePensionDoYouKnowWhenStart;

  if (typeof answer !== 'undefined') {
    if (answer === 'future-pension-know-when-starts-yes') {
      res.redirect(`${ABS_BASE_PATH}/when-start`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/details-note`);
    }
  } else {
    res.redirect(`${ABS_BASE_PATH}/do-you-know-when-starts`);
  }
});

router.post('/do-you-know-payment-information', function (req, res) {
  const answer = req.body.futurePensionDoYouKnowPaymentInformation;

  if (typeof answer !== 'undefined') {
    if (answer === 'future-pension-know-payment-information-yes') {
      res.redirect(`${ABS_BASE_PATH}/payment-frequency`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/details-note`);
    }
  } else {
    res.redirect(`${ABS_BASE_PATH}/do-you-know-payment-information`);
  }
});

router.post('/when-start', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/do-you-know-payment-information`);
});

router.post('/details-note', function (req, res) {
  if (typeof app.locals.pensionsDetailsNoteShown === 'undefined') {
    res.redirect(`${ABS_BASE_PATH}/do-you-know-when-starts`);
  } else {
    ++app.locals.pensionsDetailsNoteShown;

    if (app.locals.pensionsDetailsNoteShown === 1) {
      res.redirect(`${ABS_BASE_PATH}/do-you-know-payment-information`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/another-one`);
    }
  }
});

router.post('/payment-frequency', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/another-one`);
});

router.post('/another-one', function (req, res) {
  const answer = req.body.futurePensionAnotherOne;

  if (typeof answer !== 'undefined') {
    //pensionTracker.add();

    if (answer === 'future-pension-another-one-yes') {
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
