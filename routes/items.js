const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const expressValidator = require("express-validator");

const Item = require("../models/item");
const { body } = require("express-validator/check");
const { updateOne } = require("../models/item");
router.use(expressValidator());

//get
router.get("/items", async (req, res) => {
  const items = await Item.find();
  res.send({
    success: true,
    message: `All Items successfully retrieved`,
    data: { items },
  });
});

//post
router.post("/items", async (req, res) => {
  try {
    let newItem = new Item(req.body);
    const data = await newItem.save();
    return res.send({ data, message: "Todo added successfully" });
  } catch (error) {
    res.status(400).send("unable to post todo");
  }
});

//delete
router.delete("/items/deleteitem/:id", async (req, res) => {
  try {
    await Item.deleteOne({ _id: req.params.id });
    return res.send({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(400).send("unable to delete todo");
  }
});

//update

router.put("/items/:id", async (req, res) => {
  try {
    const data = req.body;
    await Item.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      data
    );
    return res.status(200).send({
      status: 200,
      message: "Todo updated successfully",
      data,
    });
  } catch (error) {
    return res.status(400).send({
      status: 400,
      message: "Oops failed to update the Todo",
      error,
    });
  }
});

module.exports = router;
