const express = require("express");
const dot = require("dotenv").config();
const { sequelize } = require("./models");
const cors = require("cors");
const app = express();
const mainRouter = require("./routers/mainRouter");

app.use(express.json());
app.use("/", mainRouter);

// app.use(
//   cors({
//     // origin: ["http://localhost:3000"],
//     // origin: ["http://mysssbuckettt.s3-website.ap-northeast-2.amazonaws.com"],

//     // origin: "https://d1mgx07wg6eqil.cloudfront.net",
//     // origin: "https://web-front-m3viba9m327f6c46.sel4.cloudtype.app",
//     origin: "https://web-front-m3viba9m327f6c46.sel4.cloudtype.app",
//     credentials: true,
//   })
// );
app.use(cors());

sequelize
  .sync({ force: false })
  .then((e) => {
    console.log("sequelize 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

const server = app.listen(8000, () => {
  console.log("server on");
});
