const mongoose=require('mongoose')
const shortid = require('shortid')
const urlschema=new mongoose.Schema({
    full:{
        type: String,
        required: true
    },
    short:{
        type: String,
        required: true,
        default: shortid.generate
    },
    count:{
        type: Number,
        default: 0,
        required:true
    }
})
module.exports = mongoose.model('shorturl',urlschema);
