import ServicoService from "../services/servico.service.js";

async function createServico(req, res, next){    
    try {
        let servico = req.body;
        if(!servico.valor || !servico.descricao || !servico.animalId) {
            throw new Error('Descrição, Valor e AnimalId são obrigatórios!') 
        }
        
        const result = await ServicoService.createServico(servico);
        res.send(result);
        logger.info(`POST /servico - ${JSON.stringify(servico)}`);

    } catch (error) {
        next(error)
    }    
}

async function getServicos(req, res, next){
    try {        
        const proprietarioId = req.query.proprietarioId? req.query.proprietarioId: 0;
        res.send(await ServicoService.getServicos(proprietarioId));
        logger.info(`GET /servico`);
        
    } catch (error) {
        next(error)
    }
}

async function getServico(req, res, next){
    try {
        res.send(await ServicoService.getServico(req.params.id));
        logger.info(`GET /servico`);
        
    } catch (error) {
        next(error)
    }
}

async function deleteServico(req, res, next){
    try {
        await ServicoService.deleteServico(req.params.id)
        res.end();
        logger.info(`DELETE /servico`);
        
    } catch (error) {
        next(error)
    }
}

async function updateServico(req, res, next){
    try {
        let servico = req.body;
        if(!servico.servicoId || !servico.descricao || !servico.valor || !servico.animalId) {
            throw new Error('Id, Descrição, Valor e AnimalId são obrigatórios!') 
        }
        
        const result = await ServicoService.updateServico(servico);
        res.send(result);
        logger.info(`PUT /servico - ${JSON.stringify(servico)}`);
        
    } catch (error) {
        next(error)
    }
}

export default{
    createServico,
    getServicos,
    getServico,
    deleteServico,
    updateServico
}