const router = require("express").Router();

const {
  getAllPosts,
  getSinglePost,
} = require("../../controllers/posts/postsController");

router.get("/", getAllPosts);

router.get("/:id", getSinglePost);

module.exports = router;
