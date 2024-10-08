const router = require("express").Router();

// router
const postsRouter = require("./posts/postsRoutes");
const usersRouter = require("./users/usersRoutes");

// middleware
const { welcomeMiddleware } = require("../middlewares/welcomeMiddleware");

// controllers
const { homeController } = require("../controllers/home/homeController");
const { aboutController } = require("../controllers/about/aboutController");
const { careerController } = require("../controllers/career/careerController");

// routes
router.get("/", welcomeMiddleware, homeController);

router.use("/posts", postsRouter);
router.use("/users", usersRouter);

router.get("/about", aboutController);

router.get("/career", careerController);

module.exports = router;
