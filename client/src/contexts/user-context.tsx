import React from "react";
import { userLoginState, reducerAction } from "../reducers/user-reducer";
import { userTypes } from "../types";

export const userContext = React.createContext<{
  stateUser: userTypes;
  dispatchUser: React.Dispatch<reducerAction>;
}>({
  stateUser: userLoginState,
  dispatchUser: () => undefined
})