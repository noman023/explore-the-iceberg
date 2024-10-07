const router = require("express").Router();

// middlewares
const { welcomeMiddleware } = require("./middlewares/welcomeMiddleware");

// controllers
const { homeController } = require("./controllers/homeController");
const { aboutController } = require("./controllers/aboutController");
const { careerController } = require("./controllers/careerController");

// routes
router.get("/", welcomeMiddleware, homeController);

router.get("/about", aboutController);

router.get("/career", careerController);

module.exports = router;
