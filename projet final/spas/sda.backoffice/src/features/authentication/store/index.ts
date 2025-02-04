import { createContext, useContext } from "react";
import { AuthenticationUser } from "../models";

export interface AuthenticationState {
    user: AuthenticationUser | null;
    status: 'draft' | 'request' | 'loggedIn' | 'failed' | 'loggedOut'
}

export interface AuthenticationStateWithLogin {
    user: AuthenticationState,
    logIn: ((login: string, password: string) => void) | null,
    logOut: (() => void) | null
}

export const initialUserState: AuthenticationState = {
    status: 'draft',
    user: null
}

export const initialUserStateWithLogin: AuthenticationStateWithLogin = {
    user: initialUserState,
    logIn: null,
    logOut: null
}

export const AuthenticationContext = createContext<AuthenticationStateWithLogin>(initialUserStateWithLogin)

export const useAuthenticationContext = () => useContext<AuthenticationStateWithLogin>(AuthenticationContext)