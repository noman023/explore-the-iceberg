const router = require("express").Router();

const {
  getAllUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/users/usersController");

router
  .get("/", getAllUsers)
  .get("/:id", getSingleUser)
  .post("/create", createUser);

module.exports = router;
