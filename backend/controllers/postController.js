import Post from '../models/postModel.js';

// For creating a post
export const createPost = async (req, res) => {
  const { title, content, author } = req.body;

  const post = new Post({
    title,
    content,
    author,
  });

  try {
    const newPost = await post.save(); // Await the save operation
    res.status(200).json({ message: "Post Created Successfully", newPost });
  } catch (error) {
    res.status(400).json({ message: "Error occurred in creating post", error });
  }
};

// Fetching all posts
export const getPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ message: "Posts fetched successfully", posts });
  } catch (error) {
    res.status(400).json({ message: "Error occurred in fetching posts", error });
  }
};

// Fetch by ID
export const getPostbyId = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post fetched successfully by ID", post });
  } catch (error) {
    res.status(400).json({ message: "Error occurred in fetching post", error });
  }
};

// Update a post
export const update = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    res.status(400).json({ message: "Error occurred in updating post", error });
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully", deletedPost });
  } catch (error) {
    res.status(400).json({ message: "Error occurring in post deletion", error });
  }
};
