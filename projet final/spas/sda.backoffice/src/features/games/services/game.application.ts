import { GetAllGames, CreateOneGame } from "../custom-types";
import { Games } from "../models";
import { Game } from "../models";
import { getAllGamesByApi, createOneGameByApiGeneric } from "./game.infrastructure";
/**
 * Gets all games
 * @param api Api to get raw list of games
 */
async function getAllGames(api: GetAllGames): Promise<Games> {
    let result = await api()

    result = result.filter(item => item.persoChoisi?.surname !== '')

    return result
}

export function factoryGetAllGamesBusiness(): Promise<Games> {
    return getAllGames(getAllGamesByApi)
}
// *** / *** *** / *** *** / *** *** / *** *** / *** *** / *** *** / *** *** / *** *** / ***

/**
 * Create One Game
 * @param api Api to create a game
 */

async function createOneGame(item: Game, api: CreateOneGame): Promise<Game> {
    return await api(item)
}

export function factoryCreateOneGameBusiness(item: Game): Promise<Game> {
    return createOneGame(item, createOneGameByApiGeneric)
}
// *** / *** *** / *** *** / *** *** / *** *** / *** *** / *** *** / *** *** / *** *** / ***

const business = {
    getAll: factoryGetAllGamesBusiness,
    createOne: factoryCreateOneGameBusiness
}

export default business