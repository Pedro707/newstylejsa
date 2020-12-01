var express = require('express');
var router = express.Router();

// Redirect /jury-service to first question in sequence
router.get('/', function (req, res) {
  res.redirect('/design-ideas/1420-change-claim-start/iteration-7/5-jury-service/have-been');
});

router.post('/have-been', function (req, res) {
  var juryConditional = req.body.juryService;
  if (juryConditional === 'yes') {
    res.redirect('/design-ideas/1420-change-claim-start/iteration-7/5-jury-service/period');
  } else {
    res.redirect('/design-ideas/1420-change-claim-start/iteration-7/6-current-employment');
  }
});

router.post('/period', function (req, res) {
  res.redirect('/design-ideas/1420-change-claim-start/iteration-7/6-current-employment');
});

module.exports = router;
