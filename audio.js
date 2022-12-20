// We will use this to make HTTP request to the mp3 link
const axios = require("axios");
// adapters are axios modules that handle dispatching a request and settling a returned Promise once a response is received.
// const httpAdapter = require("axios/lib/adapters/http");
// const instance = axios.create({
//     adapter: require('axios/lib/adapters/http'),
//   })


// express is lightweight web framework
const express = require("express");

// Initialize express and assign to variable app
const app = express();

const INPUT =
  "https://dcs.megaphone.fm/ADV3183643348.mp3?key=c3dc25ae82cc18218902aa6a0675798a";

app.get("/audio", (req, res) => {
  axios
    .get(INPUT, {
      responseType: "stream",
      "Content-Range": "bytes 16561-8065611",
    })
    .then((Response) => {
      const stream = Response.data;

      res.set("content-type", "audio/mp3");
      res.set("accept-ranges", "bytes");
      res.set("content-length", Response.headers["content-length"]);
      console.log(Response);

      stream.on("data", (chunk) => {
        res.write(chunk);
      });

      stream.on("error", (err) => {
        res.sendStatus(404);
      });

      stream.on("end", () => {
        res.end();
      });
    })
    .catch((Err) => {
      console.log(Err.message);
    });
});

app.listen(5000, () => {
  console.log("Server is running");
});