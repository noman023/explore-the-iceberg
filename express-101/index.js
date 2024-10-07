const express = require("express");
const app = express();

app.use(require("./routes"));

// error handler
app.use((req, res) => {
  res.send("Page not found!");
});

app.listen(400, () => {
  console.log("server is running on 400 port");
});
