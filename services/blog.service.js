import BlogRepository from "../repositories/blog.repository.js"

async function createPost(post){ 
    return await BlogRepository.createPost(post);
}

async function updatePost(post){ 
    return await BlogRepository.updatePost(post);
}

async function getPosts(){ 
    console.log('service blog')
    return await BlogRepository.getPosts();
}

export default {
    createPost,
    updatePost,
    getPosts
}