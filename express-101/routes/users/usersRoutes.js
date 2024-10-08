const router = require("express").Router();

const {
  getAllUsers,
  getSingleUser,
} = require("../../controllers/users/usersController");

router.get("/", getAllUsers);

router.get("/:id", getSingleUser);

module.exports = router;
