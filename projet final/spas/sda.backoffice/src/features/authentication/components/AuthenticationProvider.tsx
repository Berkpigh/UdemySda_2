import { useState } from "react";
import {
  AuthenticationContext,
  initialUserState,
  AuthenticationState,
  AuthenticationStateWithLogin,
} from "../store";
import { PropswithChildren } from "../../../core/custom-type";
import business from "../services/authentication.application";
import { useNavigate } from "react-router-dom";

export const AuthenticationContextProvider = (props: PropswithChildren) => {
  const navigate = useNavigate()
  const [userState, setUserState] = useState<AuthenticationState>(initialUserState);

  const logIn = (login: string, password: string) => {
    business.logIn({ login, password})   // ou bien   business.logIn({ login: login, password: password})
            .then(user => {   
              setUserState({
                  user: {surname: user.surname, accessToken: user.accessToken},
                  status: 'loggedIn'
            })
          navigate('/')
    })
  };

  const logOut = () => {
    setUserState({
        user: null,
        status: 'loggedOut'
    })
  };

  const newContext: AuthenticationStateWithLogin = {
    user: userState,
    logIn,
    logOut,
  };

  return (
    <AuthenticationContext.Provider value={newContext}>
        {props.children}
    </AuthenticationContext.Provider>
  );
};
