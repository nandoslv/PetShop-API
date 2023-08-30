import BlogRepository from "../repositories/blog.repository.js"

async function createPost(post){ 
    return await BlogRepository.createPost(post);
}

async function updatePost(post){ 
    return await BlogRepository.updatePost(post);
}

async function getPosts(){     
    return await BlogRepository.getPosts();
}

async function getPost(postId){     
    return await BlogRepository.getPost(postId);
}

async function createComentario(postId, comentario){
    return await BlogRepository.createComentario(postId, comentario);
}

export default {
    createPost,
    updatePost,
    getPosts,
    getPost,
    createComentario
}