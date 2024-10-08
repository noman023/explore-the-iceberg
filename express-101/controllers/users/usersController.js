function getAllUsers(req, res) {
  res.send("getting all users");
}

function getSingleUser(req, res) {
  res.send(`getting user number ${req.params.id}`);
}

module.exports = { getAllUsers, getSingleUser };
