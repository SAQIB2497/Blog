import mongoose from 'mongoose'

//Making Schema
const postSchema = new mongoose.Schema({
    title: {
        type: String, require: true
    },
    content: {
        type: String, require: true
    },
    author: { 
        type: String, required: true 
    }
})

const Post = mongoose.model('Post', postSchema); 

export default Post; //Exporting Model