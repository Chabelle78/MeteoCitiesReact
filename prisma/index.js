const connection = require("./db-config");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (request, response) => {
  response.send("welcome to LPB land");
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting:" + err.stack);
  } else {
    console.log("connected as id" + connection.threadId);
  }
});



app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
