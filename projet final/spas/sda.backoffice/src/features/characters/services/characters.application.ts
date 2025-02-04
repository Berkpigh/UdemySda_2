import { GetAllCharacters } from "../custom-types";
import { Characters } from "../models";
import { getAllCharactersByApi } from "./characters.infrastructure";

/**
 * Gets all characters
 * @param api Api to get raw list of characters
 */
async function getAllCharacters(api: GetAllCharacters): Promise<Characters> {
    let result = await api()

    result = result.filter(item => item.name !== '')

    return result
}

export function factoryGetAllCharactersBusiness(): Promise<Characters> {
    return getAllCharacters(getAllCharactersByApi)
}

const business = {
    getAll: factoryGetAllCharactersBusiness
}

export default business