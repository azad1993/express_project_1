const express = require("express");
const app = express();
const fs = require("fs");

// const workers = [
//     {id: 1, name: "Azad", age: 27},
//     {id: 2, name: "Adil", age: 25},
//     {id: 3, name: "Nadir", age: 45},
// ]

let rawdata = JSON.parse(fs.readFileSync("json.json"));

app.get("/", (request, response) => {
  response.send(rawdata);
});

app.get("/about", () => {
  console.log("hello world about");
});

app.listen(3000, () => {
  console.log("3000 is using");
});
