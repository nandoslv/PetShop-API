import express from "express";
import BlogController from "../controllers/blog.controller.js";

const router = express.Router();

router.post('/post/', BlogController.createPost);
router.put('/post/', BlogController.updatePost);
router.get('/posts/', BlogController.getPosts);
router.get('/post//:id', BlogController.getPost);
router.post('/post/comentario/:id', BlogController.createComentario);

export default router;