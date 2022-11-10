const mongoose = require("mongoose") 
const GemsSchema = mongoose.Schema({ 
 gems_type: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Gems", 
GemsSchema) 