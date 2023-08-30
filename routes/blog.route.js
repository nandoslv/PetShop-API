import express from "express";
import BlogController from "../controllers/blog.controller.js";

const router = express.Router();

router.post('/', BlogController.createPost);

export default router;