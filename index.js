const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile("./data.txt", "utf-8", (err, data) => {
    if (err) {
      res.send("Error reading file");
    } else {
      res.send(data);
    }
  });

  // res.send("Hello From Server");
});

app.get("/write", (req, res) => {
  fs.appendFile("./data.txt", "Ok alright\n", (err) => {
    if (err) {
      res.send("Error writing file");
    } else {
      res.send("Data written successfully");
    }
  });
});

app.get("/hehe", (req, res) => {
  res.send("Hello From hehe");
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
