const express = require("express");
const dot = require("dotenv").config();
const { sequelize } = require("./models");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://d1mgx07wg6eqil.cloudfront.net"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/getList", (req, res) => {
  res.json({ message: "CORS is working!" });
});

app.use(
  cors({
    // origin: ["http://localhost:3000"],
    // origin: ["http://mysssbuckettt.s3-website.ap-northeast-2.amazonaws.com"],

    origin: "https://d1mgx07wg6eqil.cloudfront.net",
    credentials: true,
  })
);

const mainRouter = require("./routers/mainRouter");

sequelize
  .sync({ force: false })
  .then((e) => {
    console.log("sequelize 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", mainRouter);

const server = app.listen(8000, () => {
  console.log("server on");
});
