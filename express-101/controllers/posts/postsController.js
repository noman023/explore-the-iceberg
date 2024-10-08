const routeControllers = {};

routeControllers.getAllPosts = function (req, res) {
  res.send("getting all post");
};

routeControllers.getSinglePost = function (req, res) {
  res.send(`getting post number ${req.params.id}`);
};

module.exports = routeControllers;
