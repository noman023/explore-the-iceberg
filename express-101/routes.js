const router = require("express").Router();

// middlewares
const { welcomeMiddleware } = require("./middlewares/welcomeMiddleware");

// controllers
const { homeController } = require("./controllers/home/homeController");
const { aboutController } = require("./controllers/about/aboutController");
const { careerController } = require("./controllers/career/careerController");

// routes
router.get("/", welcomeMiddleware, homeController);

router.get("/about", aboutController);

router.get("/career", careerController);

module.exports = router;
