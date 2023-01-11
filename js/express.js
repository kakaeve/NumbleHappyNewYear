const express = require("express");
const axios = require("axios");

const endPoint = "http://43.201.103.199/";

app.get("/", (req, res) => {});

app.listen(3000, () => {
  console.log("open!!");
});

const happyList = [];

axios.post(`${endPoint}/posts`).then((res) => {
  console.log(res);
});
