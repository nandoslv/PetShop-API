import BlogService from "../services/blog.service.js";

async function createPost(req, res, next){    
    try {
        let post = req.body;
        if(!post.titulo || !post.conteudo ) {
            throw new Error('Título e Conteúdo são obrigatórios!') 
        }
        
        const result = await BlogService.createPost(post);
        res.send(result);
        logger.info(`POST /Blog - ${JSON.stringify(post)}`);

    } catch (error) {
        next(error)
    }    
}

export default {
    createPost
}