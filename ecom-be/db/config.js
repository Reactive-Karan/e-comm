
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/e-commerce')

// const connectDB = async () => {
//     mongoose.connect('mongodb://localhost:27017/e-comm')
//     const productSchema = new mongoose.Schema({})
//     const product = mongoose.model('product', productSchema);
//     const data = await product.find()
//     console.warn(data)
// }

// connectDB()