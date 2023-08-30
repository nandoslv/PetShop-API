import Animal from "../models/animal.model.js";

async function insertAnimal(animal) {
    try {        
        return await Animal.create(animal);
    } catch (error) {
        throw error;        
    }
}

async function getAnimals(proprietarioId=0) {
    try {
        if(proprietarioId){                        
            return await Animal.findAll({
                where: {
                    proprietarioId
                }
            });
        }        
        return await Animal.findAll();
        
    } catch (error) {
        throw error;
    }
}

async function getAnimal(id) {
    try {
        return await Animal.findByPk(id)        
    } catch (error) {
        throw error;
    }
}

async function updateAnimal(animal) {
    try {
        await Animal.update(animal, {
            where:{
                animalId: animal.animalId
            }
        });
        return await getAnimal(animal.animalId);
    } catch (error) {
        throw error;
    }   
}

async function deleteAnimal(id) {
    try {
        await Animal.destroy({
            where:{
                animalId: id
            }
        })
    } catch (error) {
        throw error;
    }
}

export default {
    insertAnimal,
    getAnimals,
    getAnimal,
    updateAnimal,
    deleteAnimal
}