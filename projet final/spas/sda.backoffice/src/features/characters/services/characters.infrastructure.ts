import { Characters } from "../models";

// TODO : ALERT, delete from code !!!
const url = 'https://the-one-api.dev/v2/character'

export function getBearerByToken() {
    // TODO : ALERT, delete from code !!!
    return { 'Authorization': 'Bearer 8fMPgL_GMFN0IDXCKtp0' }
}

type CharacterApiReturnType = {
    _id: string,
    race: string,
    gender: string,
    name: string
}

type ApiReturnType = {
    docs: CharacterApiReturnType[]
}
/**
  * Return list of characters from api
 */
async function getRawApi(): Promise<ApiReturnType> {
    const headers = getBearerByToken()
    const response = await fetch(url, { headers })
    const result = await response.json() as ApiReturnType

    return result
}


async function getAllCharactersByApiGeneric(rawApi: () => Promise<ApiReturnType>): Promise<Characters> {
    const resultApi = await rawApi()

    return resultApi.docs.map( doc =>  (        
        {       
        id: doc._id,
        name: doc.name
        }
    ))
}

export async function getAllCharactersByApi(): Promise<Characters> {
    return getAllCharactersByApiGeneric(getRawApi)
}