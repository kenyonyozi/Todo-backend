const mongoose = require('mongoose');
const itemSchema = mongoose.Schema({
    text:{
        type: String,
        required:true
    },
    done:{
        type: Boolean,
        required:true
        
    },
    
});

const Item = module.exports = mongoose.model('Item', itemSchema);