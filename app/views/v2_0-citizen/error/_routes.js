const express = require('express');
const router = express.Router();

const BASE_PATH = 'error';
const ABS_BASE_PATH = `/${BASE_PATH}`;

// Destroy session when errors is accessed
// to stop the error message showing
router.get('/*', function (req, res) {
  req.session.destroy();
  req.next();
});

router.post('/inline', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/inline?show=errors`);
});

router.post('/radios', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/radios?show=errors`);
});

router.post('/checkboxes', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/checkboxes?show=errors`);
});

module.exports = router;
