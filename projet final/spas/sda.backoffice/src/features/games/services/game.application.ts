import { GetAllGames } from "../custom-types";
import { Games } from "../models";
import { getAllGamesByApi } from "./game.infrastructure";
/**
 * Gets all games
 * @param api Api to get raw list of games
 */
async function getAllGames(api: GetAllGames): Promise<Games> {
    let result = await api()

    result = result.filter(item => item.persoChoisi.surname !== '')

    return result
}

export function factoryGetAllGamesBusiness(): Promise<Games> {
    return getAllGames(getAllGamesByApi)
}


const business = {
    getAll: factoryGetAllGamesBusiness
}

export default business