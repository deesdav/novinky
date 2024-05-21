const Novelty = require("../models/novelties");

exports.getAllNovelties = async (req, res) => {
  try {
    const result = await Novelty.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Novelties found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Novelties not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getNoveltyById = async (req, res) => {
  try {
    const result = await Novelty.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Novelty found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Novelty not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteNovelty = async (req, res) => {
  try {
    const result = await Novelty.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Novelty deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateNovelty = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      content: req.body.content,
      author: req.body.author,
      date: req.body.date,
      img: req.body.img,
    };
    const result = await Novelty.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Novelty updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Novelty was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createNovelty = async (req, res) => {
  try {
    const data = new Novelty({
      name: req.body.name,
      content: req.body.content,
      author: req.body.author,
      date: req.body.date,
      img: req.body.img,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Novelty created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Novelty was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
