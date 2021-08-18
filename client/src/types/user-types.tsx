import { Dispatch, SetStateAction } from "react"

export type userTypes = {
  userType: string,
  setUserType: Dispatch<SetStateAction<string>>,
}

export type authTypes = {
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>,
}

export type registrationTypes = {
  onCloseRegistrationModal: () => void,
}

export type clickTypes = {
  clickedId: number
  setClickedId: React.Dispatch<React.SetStateAction<number>>
}