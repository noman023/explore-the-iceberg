function aboutController(req, res) {
  res.send(JSON.stringify({ message: "hello from about route!" }));
}

module.exports = { aboutController };
