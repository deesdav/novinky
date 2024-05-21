var express = require("express");
var router = express.Router();

const noveltiesController = require("../controllers/novelties");

router.get("/", noveltiesController.getAllNovelties);

//localhost:3000/novelties/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", noveltiesController.getNoveltyById);

router.delete("/:id", noveltiesController.deleteNovelty);

router.put("/:id", noveltiesController.updateNovelty);

router.post("/", noveltiesController.createNovelty);

module.exports = router;
