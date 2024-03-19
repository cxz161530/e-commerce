require("dotenv").config();
const mongoose = require('mongoose')
require('./config/database')
const data = require('./grocery')
const ProductModel = require('./models/product')

const seedDb = async() => {
  await ProductModel.deleteMany({})
  await ProductModel.insertMany(data)
}

seedDb().then(() => {
  mongoose.connection.close()
})