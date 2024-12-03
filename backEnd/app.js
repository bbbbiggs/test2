const express = require("express");
const dot = require("dotenv").config();
const { sequelize } = require("./models");
const cors = require("cors");
const app = express();

app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cors({
    // origin: ["http://localhost:3000"],
    // origin: ["http://mysssbuckettt.s3-website.ap-northeast-2.amazonaws.com"],

    // origin: "https://d1mgx07wg6eqil.cloudfront.net",
    // origin: "https://web-front-m3viba9m327f6c46.sel4.cloudtype.app",
    origin: ["https://web-front-m3viba9m327f6c46.sel4.cloudtype.app"],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: { sameSite: "none", secure: true, maxAge: 600000, httpOnly: true }, // 이 부분에서 secure 옵션을 true로 설정합니다.
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
