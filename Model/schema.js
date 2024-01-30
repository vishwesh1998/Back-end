const mongoose = require('mongoose');
// const {Schema} = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type : String, required : true, unique : true},
    description: {type : String, required : true},
    price: {type : String, required : true, min : [1, "price can't be less then 1"]},
    discountPercentage: {type : Number, min : [1, "discount can't be less then 1"], max : [50, 'discount can"t be more then 50']},
    rating: {type : Number, min : [1, "rating can't be less then 1"], max : [5, 'discount can"t be more then 5']},
    brand: {type : String, required : true},
    category: {type : String, required : true},
    thumbnail: {type : String, required : true}
            
})

exports.product = mongoose.model('Product', productSchema)