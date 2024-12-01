const express = require("express");
const dot = require("dotenv").config();
const { sequelize } = require("./models");
const cors = require("cors");
const app = express();

app.use(express.json());

// app.use(
//   cors({
//     // origin: ["http://localhost:3000"],
//     // origin: ["http://mysssbuckettt.s3-website.ap-northeast-2.amazonaws.com"],

//     // origin: "https://d1mgx07wg6eqil.cloudfront.net",
//     origin: "https://web-front-m3viba9m327f6c46.sel4.cloudtype.app",
//     credentials: true,
//   })
// );

// app.use(
//   cors({
//     // origin: [process.env.CORS, process.env.CORS_DEV],
//     origin: "https://web-front-m3viba9m327f6c46.sel4.cloudtype.app",
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
//   })
// );

var corsOptions = {
  origin: "https://web-front-m3viba9m327f6c46.sel4.cloudtype.app",
  // 이 설정은 https://sub.example.app 인 origin을 허용합니다.
  // 어플리케이션 구성에 맞게 origin 규칙을 적용해주세요.
  optionsSuccessStatus: 200,
};

app.get("/getList", cors(corsOptions), function (req, res, next) {
  res.json({ msg: "https://sub.example.app 규칙인 Origin에 대하여 개방" });
});

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
