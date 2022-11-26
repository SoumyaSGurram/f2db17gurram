const mongoose = require("mongoose") 
const GemsSchema = mongoose.Schema({ 
 gems_type: {
    type:String,
    required:true,
    max:10
 },
 size: {
     type:String,
     required:true
 } ,
 cost: {
    type:Number,
    min:10,
    max:100
 } 
}) 
 
module.exports = mongoose.model("Gems", 
GemsSchema) 