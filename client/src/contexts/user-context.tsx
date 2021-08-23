import React from "react";
import { userLoginState } from "../reducers/login-reducer";
import { userTypes } from "../types";
import { userLoginAction } from "../actions/actions";


export const userContext = React.createContext<{
    stateUser: userTypes;
    dispatchUser: React.Dispatch<userLoginAction>;
}>({
    stateUser: userLoginState,
    dispatchUser: () => undefined
})