const express = require("express");
const dot = require("dotenv").config();
const { sequelize } = require("./models");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
  cors({
    // origin: ["http://localhost:3000"],
    origin: ["https://web-front-m3viba9m327f6c46.sel4.cloudtype.app"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 200,
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
