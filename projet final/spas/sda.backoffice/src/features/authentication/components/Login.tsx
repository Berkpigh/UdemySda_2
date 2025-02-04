import { useState } from "react"
import { useAuthenticationContext } from "../store"
import { LoginUser } from "../models"

export const Login = () => {
    const [user, setUser] = useState<LoginUser>({login: '', password: ''})
    const authContext = useAuthenticationContext()

    const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (authContext.logIn) {
            authContext.logIn(user.login, user.password)
        }
    }

    const updateLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState: LoginUser = {
            login: e.target.value,
            password: user.password
        }
        setUser(newState)
    }
    const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState: LoginUser = {
            login: user.login,
            password:  e.target.value
        }
        setUser(newState)
    }

    return (
        <>
            <form onSubmit={submitForm} method="post">
                <div>
                    <div>
                        <label>Login</label>
                        <input name="login" value={user.login} onChange={updateLogin}></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={user.password} onChange={updatePassword}></input>
                    </div>
                </div>
                <div>
                    <button type="submit">Se connecter</button>
                </div>
            </form>
        </>
    )
}