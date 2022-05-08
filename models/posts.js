const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    fbCode:{
        type:String,
        required:true
    },
    fnbName:{
        type:String,
        required:true
    },
    mainCat:{
        type:String,
        required:true
    },
    subCat:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Foodnbevs',postSchema);