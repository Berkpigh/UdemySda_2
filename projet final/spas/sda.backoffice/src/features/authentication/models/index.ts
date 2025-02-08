export interface User {
    userName: string;
    email: string;
}

export interface LoginUser {
    login: string;
    password: string;
}

export interface AuthenticationUser extends User {
    token ?: string;
}