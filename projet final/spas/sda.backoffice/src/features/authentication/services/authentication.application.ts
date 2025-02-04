import { PostOneUser } from "../custom-types"
import { AuthenticationUser, LoginUser} from "../models" 
import { postLogInByApi } from "./authentication.infrastructure"
import { saveUserInLocalDb } from "./localstorage.infrastructure"

/**
 * Login user to database (api)
 * * @param api Api to get raw user
*/
async function loginUser(user: LoginUser, api: PostOneUser): Promise<AuthenticationUser> {
    let result = await api(user)

    // TODO: save in localStorage
    saveUserInLocalDb(result)

    return result
}

export function factoryLoginUserBusiness(user: LoginUser): Promise<AuthenticationUser> {
    return loginUser(user, postLogInByApi)
}

const business = {
    logIn: factoryLoginUserBusiness
}

export default business