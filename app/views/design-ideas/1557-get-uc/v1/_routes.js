const express = require('express');
const router = express.Router();

const BASE_PATH = 'design-ideas/1557-get-uc/v1';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/v1_4-citizen/5-jury-service';

// Redirect to first question in sequence
router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/guard`);
});

router.post('/guard', function (req, res) {
    res.redirect(NEXT_PATH);

});

module.exports = router;
