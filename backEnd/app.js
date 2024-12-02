const express = require("express");
const dot = require("dotenv").config();
const { sequelize } = require("./models");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
  cors({
    // origin: ["http://localhost:3000"],
    // origin: ["http://mysssbuckettt.s3-website.ap-northeast-2.amazonaws.com"],

    // origin: "https://d1mgx07wg6eqil.cloudfront.net",
    origin: "https://web-front-m3viba9m327f6c46.sel4.cloudtype.app:3000",
    // origin: "https://web-front-m3viba9m327f6c46.sel4.cloudtype.app:80",
    credentials: true,
  })
);

// CORS 설정
// app.use(
//   cors({
//     origin: "https://web-front-m3viba9m327f6c46.sel4.cloudtype.app", // 허용할 프론트엔드 도메인
//     methods: ["GET", "POST", "OPTIONS"], // 허용할 HTTP 메서드
//     allowedHeaders: ["Content-Type", "Authorization"], // 허용할 헤더
//   })
// );

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
