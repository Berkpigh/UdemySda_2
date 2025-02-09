import handler from "../../../core/infrastructures/https/http-handler"
import { Games, Game } from "../models"

// TODO : ALERT, delete from code !!!
const url = 'https://localhost:7216/api/game/'

type GameApiReturnType = {
    _id: number,
    beginDate: Date,
    endDate?: Date,
    character: string,
    success: boolean
}

type ApiReturnType = GameApiReturnType[]

/**
  * Return list of games from api
 */
async function getRawApi(): Promise<ApiReturnType> {
    // const userLocal = getUserFromLocalDb()
    // const response = await fetch(url, {
    //     method: 'GET',
    //     headers: {Authorization: `Bearer ${userLocal?.token}`} //interpolation
    // })
    // const result = await response.json() as ApiReturnType

    const response = await handler.get<ApiReturnType>(url)

    return response.data
}

async function getAllGamesByApiGeneric(rawApi: () => Promise<ApiReturnType>): Promise<Games> {
    const resultApi = await rawApi()

    return resultApi.map(gameApi => ({
        id: gameApi._id,
        titre: '',
        videoGameId: 0,
        persoChoisi: { surname: gameApi.character},
         success: gameApi.success}
        ))
}

export async function getAllGamesByApi(): Promise<Games> {
    return getAllGamesByApiGeneric(getRawApi)
}
// *** / *** *** / *** *** / *** *** / *** *** / *** *** / *** *** / *** *** / *** *** / ***
/**
  * Create one game from api
 */
export async function createOneGameByApiGeneric(item: Game): Promise<Game> {
    const response = await handler.post<Game>(url, item)

    return response.data
}

// export async function createOneGameByApi(): Promise<Game> {
//     return createOneGameByApiGeneric(createOneApi)
// }
// *** / *** *** / *** *** / *** *** / *** *** / *** *** / *** *** / *** *** / *** *** / ***

