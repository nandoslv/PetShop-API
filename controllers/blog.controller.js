import BlogService from "../services/blog.service.js";

async function createPost(req, res, next){    
    try {
        let post = req.body;
        if(!post.titulo || !post.conteudo ) {
            throw new Error('Título e Conteúdo são obrigatórios!') 
        }
        
        const result = await BlogService.createPost(post);
        res.send(result);
        logger.info(`POST /blog/post - ${JSON.stringify(post)}`);

    } catch (error) {
        next(error)
    }    
}

async function updatePost(req, res, next){
    try {
        let post = req.body;
        if(!post._id || !post.post.titulo || !post.post.conteudo ) {
            throw new Error('Id, Título e Conteúdo são obrigatórios!') 
        }
        
        const result = await BlogService.updatePost(post);
        res.send(result);
        logger.info(`PUT /blog/post - ${JSON.stringify(post)}`);
        
    } catch (error) {
        next(error)
    }
}

async function getPosts(req, res, next){
    try {                
        res.send(await BlogService.getPosts());
        logger.info(`GET /blog/posts`);
        
    } catch (error) {
        next(error)
    }
}

async function getPost(req, res, next){
    try {                
        res.send(await BlogService.getPost(req.params.id));
        logger.info(`GET /blog/post:id`);
        
    } catch (error) {
        next(error)
    }
}

async function createComentario(req, res, next){
    try {
        const comentario = req.body;
        res.send(await BlogService.createComentario(req.params.id, comentario))
        logger.info(`GET /blog/post/comentario`);
    } catch (error) {
        next(error)
    }
}


export default {
    createPost,
    updatePost,
    getPosts,
    getPost,
    createComentario
}