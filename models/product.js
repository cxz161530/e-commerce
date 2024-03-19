const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
    category: String,
    name: String,
    price: String,
    amount: String,
    photoUrl: String,


});

module.exports = mongoose.model('Product', productSchema);