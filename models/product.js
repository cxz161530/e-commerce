const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
    category: String,
    name: String,
    price: Number,
    amount: Number,
    photoUrl: String,


});

module.exports = mongoose.model('Product', productSchema);