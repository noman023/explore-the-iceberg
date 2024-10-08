function homeController(req, res) {
  res.send(JSON.stringify({ message: "welcome to home" }));
}

module.exports = { homeController };
