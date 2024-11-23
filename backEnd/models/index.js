const Sequelize = require("sequelize");
const config = require("./config");

const { UploadedFilesList } = require("./uploadedFilesList");

const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};
db.sequelize = sequelize;

db.UploadedFilesList = UploadedFilesList;

UploadedFilesList.init(sequelize);

module.exports = db;
