import express from "express";
import BlogController from "../controllers/blog.controller.js";

const router = express.Router();

router.post('/', BlogController.createPost);
router.put('/', BlogController.updatePost);
router.get('/', BlogController.getPosts);

export default router;