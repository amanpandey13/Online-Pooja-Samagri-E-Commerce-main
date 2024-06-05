const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
    email:{
        type:String, 
        require:true,
        unique:true,
    },
    products: {
        type: Array,
        default: []
    }
    ,
    pooja: {
        type: Array,
        default: []
    }

},
{timestamps:true})

module.exports = mongoose.model('Order',orderSchema)