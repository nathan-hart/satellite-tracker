require('dotenv').config()

const express = require("express");
const axios = require("axios");
const app = express();

const port = process.env.SERVER_PORT || 8000;
const apiKey = process.env.API_KEY;
console.log(apiKey)


// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// const url = "https://api.n2yo.com/rest/v1/satellite/tle/25544&apiKey=NN2YM8-2RJYS8-FLHH3E-47LJ/";
const url = `https://api.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/1/&apiKey=${apiKey}/`;

const onClientRequest = async () => {
  const res = await axios.get(url);
  return res.data;
};

app.get("/api", async (req, res) => {
  console.log("request recieved");
  const newLocal = await onClientRequest();
  res.json(newLocal);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
