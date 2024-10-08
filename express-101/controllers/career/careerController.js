function careerController(req, res) {
  res.send(JSON.stringify({ message: "Hello from career route!" }));
}

module.exports = { careerController };
