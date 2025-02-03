import Post from '../models/postModel.js'

//For creating a post
export const createPost = async (req, res) => {
    const {title, content, author} =req.body;
    const post = await new Post({
        title,
        content,
        author,
    })
    try {
        const newPost = post.save();
        res.status(200).json({ message: "Post Created Successfylly", newPost})
    } catch (error) {
        res.status(400).json({ message: "Error occurred in creating post", error})
    }
}