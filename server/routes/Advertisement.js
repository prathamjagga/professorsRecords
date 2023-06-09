const router = require("express").Router();

const controllers = require("../controllers/Advertisement");

router.get("/search", controllers.searchAds); //placeholder api to handle empty queries
router.get("/search/:query", controllers.searchAds);
router.post("/new", controllers.addAd);

module.exports = router;
