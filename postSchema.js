const mongoose= require('mongoose')
//SCHEMA- definition of a data structure in which 
//it is going to be stored and accessed
const postSchema=new mongoose.Schema({
    postTitle:{
        type:String,
        required:true
    },

    postNumber:{
        type:Number
    },

    postContent:{
        type:String,
        required:true
    }
})

module.export=mongoose.model('posts',postSchema)