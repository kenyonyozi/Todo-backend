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

//post
router.post("/", async (req, res) => {
    let newItem = new Item(req.body);
   const data = await newItem.save();
    return res.send({data})
});

//delete
router.delete('/deleteitem/:id',async (req,res)=>{
    try {
        await Item.deleteOne({_id:req.params.id})
        return res.send({message: 'Item deleted successfully'})
    } catch (error) {
        res.status(400).send('unable to delete item')
    }
});

module.exports = router;