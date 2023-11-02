// schema 
// OOP in js "new obj"
const mongoose = require("mongoose");
const Schema = mongoose.Schema ;
const productSchema = new Schema({
    title : String,        // String is shorthand of { type: String }
    description : String,
    price : {type: Number, min:[0,"price is below zero"],max:[500,"price is aboved erorr"]}, 
});

// create collection
exports.product = mongoose.model("Product", productSchema);