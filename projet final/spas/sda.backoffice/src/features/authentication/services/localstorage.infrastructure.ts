import { AuthenticationUser } from "../models";

/**
 * save in local storage
 * @param user 
 */
export function saveUserInLocalDb(user: AuthenticationUser): void {
    localStorage.setItem('authenticationUser', JSON.stringify(user))    
}

export function getUserFromLocalDb(): AuthenticationUser | null {
   const fromLocalStorage = localStorage.getItem('authenticationUser')
    let user: AuthenticationUser | null = null
    
    if (fromLocalStorage) {
        user = JSON.parse(fromLocalStorage) as AuthenticationUser
    }

    return user
}