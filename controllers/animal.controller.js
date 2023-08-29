import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next){    
    try {
        let animal = req.body;
        if(!animal.nome || !animal.tipo || !animal.proprietarioId) {
            throw new Error('Nome, Tipo e Proprietario_Id são obrigatórios!') 
        }
        
        const result = await AnimalService.createAnimal(animal);
        res.send(result);
        logger.info(`POST /animal - ${JSON.stringify(animal)}`);

    } catch (error) {
        next(error)
    }    
}

async function getAnimals(req, res, next){
    try {        
        const proprietarioId = req.query.proprietarioId? req.query.proprietarioId: 0;
        res.send(await AnimalService.getAnimals(proprietarioId));
        logger.info(`GET /animal`);
        
    } catch (error) {
        next(error)
    }
}

async function getAnimal(req, res, next){
    try {
        res.send(await AnimalService.getAnimal(req.params.id));
        logger.info(`GET /animal`);
        
    } catch (error) {
        next(error)
    }
}

async function deleteAnimal(req, res, next){
    try {
        await AnimalService.deleteAnimal(req.params.id)
        res.end();
        logger.info(`DELETE /animal`);
        
    } catch (error) {
        next(error)
    }
}

async function updateAnimal(req, res, next){
    try {
        let animal = req.body;
        if(!animal.animalId || !animal.nome || !animal.tipo || !animal.proprietarioId) {
            throw new Error('Id, Nome, tipo e Proprietario_Id são obrigatórios!') 
        }
        
        const result = await AnimalService.updateAnimal(animal);
        res.send(result);
        logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
        
    } catch (error) {
        next(error)
    }
}

export default{
    createAnimal,
    getAnimals,
    getAnimal,
    deleteAnimal,
    updateAnimal
}