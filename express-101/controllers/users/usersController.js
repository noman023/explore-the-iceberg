const UserModel = require("../../models/userModel");

async function getAllUsers(req, res) {
  const users = await UserModel.find();
  res.send(users);
}

function getSingleUser(req, res) {
  res.send(`getting user number ${req.params.id}`);
}

async function createUser(req, res) {
  try {
    const user = new UserModel(req.body);
    await user.save();

    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(400).send("Error creating user: " + error.message);
  }
}

module.exports = { getAllUsers, getSingleUser, createUser };
