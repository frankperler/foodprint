import { useState, Dispatch, SetStateAction } from 'react';
import ChooseUserType from './ChooseUserType'
import { RegistrationForm } from './RegistrationForm';
import { WrapperDiv } from './registration-styled-components/FormRegister.style'
import { Container } from './registration-styled-components/RegistrationContainer.style';
import { Navbar } from '../navbar/navbar';
import { RegistrationNavbar } from './RegistrationNavbar';

import { RegistrationBackground } from './registration-styled-components/RegistrationContainer.style';
import { FoodLoverRegistrationForm } from './FoodLoverRegistrationForm';
import { SupplierRegistrationForm } from './SupplierRegistrationForm';
import { RestaurantRegistrationForm } from './RestaurantRegistrationForm';


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
        {userType === 'Food lover' ?  
          <FoodLoverRegistrationForm isAuth={isAuth} setIsAuth={setIsAuth} userType={userType} setUserType={setUserType}></FoodLoverRegistrationForm>
                  : userType === 'Supplier' ? <SupplierRegistrationForm isAuth={isAuth} setIsAuth={setIsAuth} userType={userType} setUserType={setUserType}></SupplierRegistrationForm>
                  : userType === 'Restaurant' ? <RestaurantRegistrationForm isAuth={isAuth} setIsAuth={setIsAuth} userType={userType} setUserType={setUserType}></RestaurantRegistrationForm>
                  : null
      }
      </WrapperDiv>
    </RegistrationBackground>
  )
}