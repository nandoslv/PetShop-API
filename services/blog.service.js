import BlogRepository from "../repositories/blog.repository.js"

async function createPost(post){
    console.log('Blog controller')
    return await BlogRepository.createPost(post);
}

export default {
    createPost
}