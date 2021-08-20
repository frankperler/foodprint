import { useState, Dispatch, SetStateAction } from 'react';
import ChooseUserType from './ChooseUserType'
import { RegistrationForm } from './RegistrationForm';
import { WrapperDiv } from './registration-styled-components/FormRegister.style'

interface Props {
  userType: string,
  setUserType: Dispatch<SetStateAction<string>>,
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>,
  onCloseRegistrationModal: () => void,
}

export const RegistrationContainer = ({ onCloseRegistrationModal, userType, setUserType, isAuth, setIsAuth }: Props) => {

  const [clickedId, setClickedId] = useState(-1);

  return (
    <>
      <WrapperDiv>
        <ChooseUserType userType={userType} setUserType={setUserType} clickedId={clickedId} setClickedId={setClickedId}></ChooseUserType>
        <RegistrationForm userType={userType} setUserType={setUserType} onCloseRegistrationModal={onCloseRegistrationModal} isAuth={isAuth} setIsAuth={setIsAuth} />
      </WrapperDiv>
    </>
  )
}