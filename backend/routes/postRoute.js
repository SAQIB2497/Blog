import express from 'express';
import { createPost, deletePost, getPost, getPostbyId, update } from '../controllers/postController.js';

const router = express.Router();

router.post("/post", createPost); // Create post
router.get("/post", getPost); // Get all posts
router.get("/post/:id", getPostbyId); // Get post by ID
router.delete("/post/:id", deletePost); // Delete post by ID
router.put("/post/:id", update); // Update post by ID

export default router;
