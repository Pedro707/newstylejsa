const express = require("express");
const router = express.Router();
const radioButtonRedirect = require("radio-button-redirect");
router.use(radioButtonRedirect);

// Route index page
router.get("/", function (req, res) {
  res.render("index");
  //pensionTracker.reset()
  req.session.destroy();
});

// Add your routes here - above the module.exports line

// Routing for ticket 1001
router.use(
  "/design-ideas/1001-no-fixed-address/v2/",
  require("./views/design-ideas/1001-no-fixed-address/v2/_routes")
);

// Routing for ticket 1634
router.use(
  "/design-ideas/1634-add-conditional-reveal/",
  require("./views/design-ideas/1634-add-conditional-reveal/_routes")
);

// This moves ticket 1401 routing to 1401 directory
router.use(
  "/design-ideas/1401-eligibility/v1/",
  require("./views/design-ideas/1401-eligibility/v1/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/v2/",
  require("./views/design-ideas/1401-eligibility/v2/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/v3/",
  require("./views/design-ideas/1401-eligibility/v3/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/v4/",
  require("./views/design-ideas/1401-eligibility/v4/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/v5/",
  require("./views/design-ideas/1401-eligibility/v5/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/Oct-mvp/",
  require("./views/design-ideas/1401-eligibility/Oct-mvp/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/Dec/",
  require("./views/design-ideas/1401-eligibility/Dec/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/Jan/",
  require("./views/design-ideas/1401-eligibility/Jan/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/v6/",
  require("./views/design-ideas/1401-eligibility/v6/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/v7/",
  require("./views/design-ideas/1401-eligibility/v7/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/v8/",
  require("./views/design-ideas/1401-eligibility/v8/_routes")
);

// This moves ticket 1557 routing to 1557 directory
router.use(
  "/design-ideas/1557-get-uc/v1/",
  require("./views/design-ideas/1557-get-uc/v1/_routes")
);
router.use(
  "/design-ideas/1557-get-uc/v2/",
  require("./views/design-ideas/1557-get-uc/v2/_routes")
);
router.use(
  "/design-ideas/1557-get-uc/v3/",
  require("./views/design-ideas/1557-get-uc/v3/_routes")
);
router.use(
  "/design-ideas/1557-get-uc/v4/",
  require("./views/design-ideas/1557-get-uc/v4/_routes")
);
router.use(
  "/design-ideas/1974-af-option-1/",
  require("./views/design-ideas/1974-af-option-1/_routes")
);
router.use(
  "/design-ideas/1974-af-option-2/",
  require("./views/design-ideas/1974-af-option-2/_routes")
);

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 2.0                                                 //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v2_0-citizen/1-eligibility/",
  require("./views/v2_0-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v2_0-citizen/2-claim-start/",
  require("./views/v2_0-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v2_0-citizen/3-details/",
  require("./views/v2_0-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v2_0-citizen/3-details/", function (req, res) {
  res.redirect("/v2_0-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v2_0-citizen/4-other-benefits/",
  require("./views/v2_0-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v2_0-citizen/5-jury-service/",
  require("./views/v2_0-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v2_0-citizen/6-current-employment/",
  require("./views/v2_0-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v2_0-citizen/7-previous-employment/",
  require("./views/v2_0-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v2_0-citizen/8-abroad/",
  require("./views/v2_0-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v2_0-citizen/9-pensions/",
  require("./views/v2_0-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v2_0-citizen/10-education/",
  require("./views/v2_0-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v2_0-citizen/11-availability/",
  require("./views/v2_0-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v2_0-citizen/error/",
  require("./views/v2_0-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 2.0} ///////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.5                                                 //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v1_5-citizen/1-eligibility/",
  require("./views/v1_5-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_5-citizen/2-claim-start/",
  require("./views/v1_5-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v1_5-citizen/3-details/",
  require("./views/v1_5-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v1_5-citizen/3-details/", function (req, res) {
  res.redirect("/v1_5-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v1_5-citizen/4-other-benefits/",
  require("./views/v1_5-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v1_5-citizen/5-jury-service/",
  require("./views/v1_5-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v1_5-citizen/6-current-employment/",
  require("./views/v1_5-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v1_5-citizen/7-previous-employment/",
  require("./views/v1_5-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_5-citizen/8-abroad/",
  require("./views/v1_5-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v1_5-citizen/9-pensions/",
  require("./views/v1_5-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v1_5-citizen/10-education/",
  require("./views/v1_5-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v1_5-citizen/11-availability/",
  require("./views/v1_5-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v1_5-citizen/error/",
  require("./views/v1_5-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 1.5} ///////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.4                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v1_4-citizen/1-eligibility/",
  require("./views/v1_4-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_4-citizen/2-claim-start/",
  require("./views/v1_4-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v1_4-citizen/3-details/",
  require("./views/v1_4-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v1_4-citizen/3-details/", function (req, res) {
  res.redirect("/v1_4-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v1_4-citizen/4-other-benefits/",
  require("./views/v1_4-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v1_4-citizen/5-jury-service/",
  require("./views/v1_4-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v1_4-citizen/6-current-employment/",
  require("./views/v1_4-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v1_4-citizen/7-previous-employment/",
  require("./views/v1_4-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_4-citizen/8-abroad/",
  require("./views/v1_4-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v1_4-citizen/9-pensions/",
  require("./views/v1_4-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v1_4-citizen/10-education/",
  require("./views/v1_4-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v1_4-citizen/11-availability/",
  require("./views/v1_4-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v1_4-citizen/error/",
  require("./views/v1_4-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 1.4} ///////////////////////////////////////////

/*    */

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR GDS ASSESSMENT VARIATION -- REMOVE POST ASSESSMENT           //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/gds-citizen/1-eligibility/",
  require("./views/gds-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/gds-citizen/2-claim-start/",
  require("./views/gds-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/gds-citizen/3-details/",
  require("./views/gds-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/gds-citizen/3-details/", function (req, res) {
  res.redirect("/gds-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/gds-citizen/4-other-benefits/",
  require("./views/gds-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/gds-citizen/5-jury-service/",
  require("./views/gds-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/gds-citizen/6-current-employment/",
  require("./views/gds-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/gds-citizen/7-previous-employment/",
  require("./views/gds-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/gds-citizen/8-abroad/",
  require("./views/gds-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/gds-citizen/9-pensions/",
  require("./views/gds-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/gds-citizen/10-education/",
  require("./views/gds-citizen/10-education/_routes")
);

// This moves `error` routing to `error` directory
router.use("/gds-citizen/error/", require("./views/gds-citizen/error/_routes"));

// {END OF ROUTING FOR GDS ASSESSMENT VARIATION} ///////////////////////////////////////////

/*    */

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.3                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v1_3-citizen/1-eligibility/",
  require("./views/v1_3-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_3-citizen/2-claim-start/",
  require("./views/v1_3-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v1_3-citizen/3-details/",
  require("./views/v1_3-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v1_3-citizen/3-details/", function (req, res) {
  res.redirect("/v1_3-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v1_3-citizen/4-other-benefits/",
  require("./views/v1_3-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v1_3-citizen/5-jury-service/",
  require("./views/v1_3-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v1_3-citizen/6-current-employment/",
  require("./views/v1_3-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v1_3-citizen/7-previous-employment/",
  require("./views/v1_3-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_3-citizen/8-abroad/",
  require("./views/v1_3-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v1_3-citizen/9-pensions/",
  require("./views/v1_3-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v1_3-citizen/10-education/",
  require("./views/v1_3-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v1_3-citizen/11-availability/",
  require("./views/v1_3-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v1_3-citizen/error/",
  require("./views/v1_3-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 1.3} ///////////////////////////////////////////

/*    */

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.2                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v1_2-citizen/1-eligibility/",
  require("./views/v1_2-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_2-citizen/2-claim-start/",
  require("./views/v1_2-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v1_2-citizen/3-details/",
  require("./views/v1_2-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v1_2-citizen/3-details/", function (req, res) {
  res.redirect("/v1_2-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v1_2-citizen/4-other-benefits/",
  require("./views/v1_2-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v1_2-citizen/5-jury-service/",
  require("./views/v1_2-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v1_2-citizen/6-current-employment/",
  require("./views/v1_2-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v1_2-citizen/7-previous-employment/",
  require("./views/v1_2-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_2-citizen/8-abroad/",
  require("./views/v1_2-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v1_2-citizen/9-pensions/",
  require("./views/v1_2-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v1_2-citizen/10-education/",
  require("./views/v1_2-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v1_2-citizen/11-availability/",
  require("./views/v1_2-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v1_2-citizen/error/",
  require("./views/v1_2-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 1.2} ///////////////////////////////////////////

/*    */

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.1                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v1_1-citizen/1-eligibility/",
  require("./views/v1_1-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_1-citizen/2-claim-start/",
  require("./views/v1_1-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v1_1-citizen/3-details/",
  require("./views/v1_1-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v1_1-citizen/3-details/", function (req, res) {
  res.redirect("/v1_1-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v1_1-citizen/4-other-benefits/",
  require("./views/v1_1-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v1_1-citizen/5-jury-service/",
  require("./views/v1_1-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v1_1-citizen/6-current-employment/",
  require("./views/v1_1-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v1_1-citizen/7-previous-employment/",
  require("./views/v1_1-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_1-citizen/8-abroad/",
  require("./views/v1_1-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v1_1-citizen/9-pensions/",
  require("./views/v1_1-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v1_1-citizen/10-education/",
  require("./views/v1_1-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v1_1-citizen/11-availability/",
  require("./views/v1_1-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v1_1-citizen/error/",
  require("./views/v1_1-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 1.1} ///////////////////////////////////////////

/*    */

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.0                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v1_0-citizen/1-eligibility/",
  require("./views/v1_0-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_0-citizen/2-claim-start/",
  require("./views/v1_0-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v1_0-citizen/3-details/",
  require("./views/v1_0-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v1_0-citizen/3-details/", function (req, res) {
  res.redirect("/v1_0-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v1_0-citizen/4-other-benefits/",
  require("./views/v1_0-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v1_0-citizen/5-jury-service/",
  require("./views/v1_0-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v1_0-citizen/6-current-employment/",
  require("./views/v1_0-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v1_0-citizen/7-previous-employment/",
  require("./views/v1_0-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_0-citizen/8-abroad/",
  require("./views/v1_0-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v1_0-citizen/9-pensions/",
  require("./views/v1_0-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v1_0-citizen/10-education/",
  require("./views/v1_0-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v1_0-citizen/11-availability/",
  require("./views/v1_0-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v1_0-citizen/error/",
  require("./views/v1_0-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 1.0} ///////////////////////////////////////////

/*    */

// Add your routes here - above the module.exports line

module.exports = router;
