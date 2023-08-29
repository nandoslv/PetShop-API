import AnimalRepository from "../repositories/animal.repository.js";
import ProprietarioRepository from "../repositories/proprietario.repository.js"

async function createProprietario(proprietario){
    return await ProprietarioRepository.insertProprietario(proprietario);
}

async function getProprietarios(){
    return await ProprietarioRepository.getProprietarios();
}

async function getProprietario(id){
    return await ProprietarioRepository.getProprietario(id);
}

async function deleteProprietario(id){
    if(await AnimalRepository.getAnimals(id).length){
        throw new Error('Não foi possível excluir o proprietário infromado. Existem animais associados a ele.')
    }
    await ProprietarioRepository.deleteProprietario(id);
}

async function updateProprietario(proprietario){
    return await ProprietarioRepository.updateProprietario(proprietario);
}

export default {
    createProprietario,
    getProprietarios,
    getProprietario,
    deleteProprietario,
    updateProprietario
}