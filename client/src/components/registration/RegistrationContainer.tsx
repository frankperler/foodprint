import { useState, Dispatch, SetStateAction } from 'react';
import ChooseUserType from './ChooseUserType'
import { RegistrationForm } from './RegistrationForm';
import { WrapperDiv } from './registration-styled-components/FormRegister.style'
import { Container } from './registration-styled-components/RegistrationContainer.style';
import { Navbar } from '../navbar/navbar';
import { RegistrationNavbar } from './RegistrationNavbar';

import { RegistrationBackground } from './registration-styled-components/RegistrationContainer.style';


interface Props {
  userType: string,
  setUserType: Dispatch<SetStateAction<string>>,
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>,
}

export const RegistrationContainer = ({ userType, setUserType, isAuth, setIsAuth }: Props) => {

  const [clickedId, setClickedId] = useState(-1);

  return (
    <RegistrationBackground>
      <RegistrationNavbar></RegistrationNavbar>
      <WrapperDiv>
        <ChooseUserType userType={userType} setUserType={setUserType} clickedId={clickedId} setClickedId={setClickedId}></ChooseUserType>
        <RegistrationForm userType={userType} setUserType={setUserType} isAuth={isAuth} setIsAuth={setIsAuth} />
      </WrapperDiv>
    </RegistrationBackground>
  )
}