const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const expressValidator = require("express-validator");

const Item = require("../models/item");
router.use(expressValidator());

//get
router.get("/", async (req , res) => {
    const items = await Item.find();
   res.send({
    success: true,
    message: `All Items successfully retrieved`,
    data: { items }
}
);
});

module.exports = router;