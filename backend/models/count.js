const mongoose = require('mongoose');


const countSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref:'User'
    },
    totalProject:{
        type:Number,
        default:0
    },
    totalClients:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model("Count",countSchema);