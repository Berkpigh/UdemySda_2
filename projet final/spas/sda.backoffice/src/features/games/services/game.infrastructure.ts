import { getUserFromLocalDb } from "../../authentication/services/localstorage.infrastructure"
import { Games } from "../models"

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
  * Return list of characters from api
 */
async function getRawApi(): Promise<ApiReturnType> {
    const userLocal = getUserFromLocalDb()
    const response = await fetch(url, {
        method: 'GET',
        headers: {Authorization: `Bearer ${userLocal?.token}`} //interpolation
    })
    const result = await response.json() as ApiReturnType
    return result
}

async function getAllGamesByApiGeneric(rawApi: () => Promise<ApiReturnType>): Promise<Games> {
    const resultApi = await rawApi()

    return resultApi.map(gameApi => ({id: gameApi._id,  persoChoisi: { surname: gameApi.character}, success: gameApi.success}))
}

export async function getAllGamesByApi(): Promise<Games> {
    return getAllGamesByApiGeneric(getRawApi)
}