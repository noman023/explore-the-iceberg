function welcomeMiddleware(req, res, next) {
  console.log("hello i am a middleware");

  next();
}

module.exports = { welcomeMiddleware };
