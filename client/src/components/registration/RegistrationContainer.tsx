import { useState, Dispatch, SetStateAction } from 'react';
import ChooseUserType from './ChooseUserType'
import { WrapperDiv } from './registration-styled-components/FormRegister.style'
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

export const RegistrationContainer: React.FunctionComponent<Props> = ({ userType, setUserType, isAuth, setIsAuth }: Props) => {

  const [clickedId, setClickedId] = useState(0);

  return (
    <RegistrationBackground>
      <RegistrationNavbar></RegistrationNavbar>
      <WrapperDiv>
        <ChooseUserType userType={userType} setUserType={setUserType} clickedId={clickedId} setClickedId={setClickedId}></ChooseUserType>
        {userType === 'Food lover' ?
          <FoodLoverRegistrationForm isAuth={isAuth} setIsAuth={setIsAuth} ></FoodLoverRegistrationForm>
          : userType === 'Supplier' ? <SupplierRegistrationForm isAuth={isAuth} setIsAuth={setIsAuth} ></SupplierRegistrationForm>
            : userType === 'Restaurant' ? <RestaurantRegistrationForm isAuth={isAuth} setIsAuth={setIsAuth} ></RestaurantRegistrationForm>
              : null
        }
      </WrapperDiv>
    </RegistrationBackground>
  )
}