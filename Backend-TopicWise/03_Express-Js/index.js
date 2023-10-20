const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const product = data.products;

//create express server
const express = require("express");
const server = express();
server.listen(3000, () => {
  console.log("server start on 3000 port");
});

// middleware
server.use((req, res, next) => {
  console.log("Middleware function executed.");
  //console.log("url===", req.query);
  next();
});

server.use(express.json());

// types of request
server.get("/", (req, res) => {
  res.json({ type: "GET" });
});

server.post("/", (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});


// HOW TO SEND response
server.get("/demo", (req, res) => {
  //res.send('Hello, Express as simple msg');
  //res.send("<h1>hello in html</h1>");
  //res.sendFile("/Usera/parth/desktop/03-express-js/index.html");
  //res.json(product);
  //res.sendStatus(404);
  res.send("hello with status").status(200);
});
