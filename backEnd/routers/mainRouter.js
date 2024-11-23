const router = require("express").Router();
const {
  saveClick,
  getList,
  removeList,
} = require("../controllers/mainControllers.js");

router.post("/saveClick", saveClick);
router.post("/removeList", removeList);
router.get("/getList", getList);

module.exports = router;
