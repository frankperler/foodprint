import React from "react";
import { userLoginState } from "../reducers/login-reducer";
import { userTypes } from "../types";
import { userLoginAction, userLogoutAction } from "../actions/actions";
import { reducerAction } from "../reducers/login-reducer";


export const userContext = React.createContext<{
    stateUser: userTypes;
    dispatchUser: React.Dispatch<reducerAction>;
}>({
    stateUser: userLoginState,
    dispatchUser: () => undefined
})