export interface User {
    surname: string
}

export interface LoginUser {
    login: string;
    password: string;
}

export interface AuthenticationUser extends User {
    accessToken ?: string;
}