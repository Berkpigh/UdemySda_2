import { AuthenticationUser, LoginUser } from "../models"

// TODO : ALERT, delete from code !!!
const url = 'https://localhost:7216/api/Login/'

type ApiReturnType = {
    userName: string,
    email: string,
    token: string
}

// type ApiReturnType = {
//     surname: string,
//     // tokenType: string;
//     token: string
//     // expiresIn: number;
//     // refreshToken: string;
// }

/**
  * Return list of characters from api
 */
async function postRawApi(user: LoginUser): Promise<ApiReturnType> {
    const response = await fetch(url, {
        method: "POST", // ou 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            login: user.login,
            password: user.password
        }),
      });
  
    const result = await response.json() as ApiReturnType
    return result
}

export async function postLogInByApi(user: LoginUser): Promise<AuthenticationUser> {
    return postRawApi(user)
}

export async function fakePostLogInByApi(user: LoginUser): Promise<AuthenticationUser> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                userName: 'Legolas',
                email: user.login,
                token: '123456789'
            })
        }, 1000)
    })
}
