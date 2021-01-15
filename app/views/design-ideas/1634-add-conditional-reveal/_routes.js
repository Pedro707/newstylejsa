const express = require('express');
const router = express.Router();

const BASE_PATH = 'design-ideas/1634-add-conditional-reveal';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/v1_4-citizen/4-other-benefits';


router.post('/contact-phone', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/contact-email`);
});

router.post('/contact-email', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/bank-account`);
});

router.post('/bank-account', function (req, res) {
  res.redirect(NEXT_PATH);
});

module.exports = router;
