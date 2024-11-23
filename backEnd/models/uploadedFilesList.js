const Sequelize = require("sequelize");

class UploadedFilesList extends Sequelize.Model {
  static init(seq) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        file: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize: seq,
        timestamps: true,
        modelName: "UploadedFilesList",
        tableName: "list_table",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = { UploadedFilesList };
