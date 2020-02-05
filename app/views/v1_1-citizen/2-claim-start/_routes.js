const express = require('express');
const router = express.Router();

const BASE_PATH = 'v1_1-citizen/2-claim-start';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/v1_1-citizen/3-details';

// Do you want to change the start date?
router.post('/start-date', function (req, res) {
  const answer = req.body.claimstart;

  if (answer === 'yes') {
    res.redirect(`${ABS_BASE_PATH}/change-date`);
  } else {
    res.redirect(`${NEXT_PATH}`);
  };
});

// When do you want your claim to start?
router.post('/change-date', function (req, res) {
  res.redirect(`${NEXT_PATH}`);
});

module.exports = router;
