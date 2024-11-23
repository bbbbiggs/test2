const { User, UploadedFilesList } = require("../models");

exports.saveClick = async (req, res) => {
  try {
    const abc = req.body;

    const data = await UploadedFilesList.create({
      title: abc.english,
      file: abc.korea,
    });
    res.json("create done");
  } catch (error) {
    console.log(error);
  }
};

exports.getList = async (req, res) => {
  try {
    const data = await UploadedFilesList.findAll({});
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.removeList = async (req, res) => {
  try {
    const title = req.body.title;
    console.log("gnt", title);
    const data = await UploadedFilesList.destroy({ where: { title: title } });
    res.json("remove done");
  } catch (error) {
    console.log(error);
  }
};
