import ProprietarioService from "../services/proprietario.service.js";

async function createProprietario(req, res, next){    
    try {
        let proprietario = req.body;
        if(!proprietario.nome || !proprietario.telefone) {
            throw new Error('Nome e Telefone são obrigatórios!') 
        }
        
        const result = await ProprietarioService.createProprietario(proprietario);
        res.send(result);
        logger.info(`POST /proprietario - ${JSON.stringify(proprietario)}`);

    } catch (error) {
        next(error)
    }    
}

async function getProprietarios(req, res, next){
    try {
        res.send(await ProprietarioService.getProprietarios());
        logger.info(`GET /proprietario`);
        
    } catch (error) {
        next(error)
    }
}

async function getProprietario(req, res, next){
    try {
        res.send(await ProprietarioService.getProprietario(req.params.id));
        logger.info(`GET /proprietario`);
        
    } catch (error) {
        next(error)
    }
}

async function deleteProprietario(req, res, next){
    try {
        await ProprietarioService.deleteProprietario(req.params.id)
        res.end();
        logger.info(`DELETE /proprietario`);
        
    } catch (error) {
        next(error)
    }
}

async function updateProprietario(req, res, next){
    try {
        let proprietario = req.body;
        if(!proprietario.proprietarioId || !proprietario.nome || !proprietario.telefone) {
            throw new Error('Id, Nome e Telefone são obrigatórios!') 
        }
        
        const result = await ProprietarioService.updateProprietario(proprietario);
        res.send(result);
        logger.info(`PUT /proprietario - ${JSON.stringify(proprietario)}`);
        
    } catch (error) {
        next(error)
    }
}

export default{
    createProprietario,
    getProprietarios,
    getProprietario,
    deleteProprietario,
    updateProprietario
}