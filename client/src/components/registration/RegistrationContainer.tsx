import { useState, Dispatch, SetStateAction } from 'react';
import ChooseUserType from './ChooseUserType'
// import { FormFoodLover } from './FormFoodLover';
// import { FormRestaurant } from './FormRestaurant';
// import { FormSupplier } from './FormSupplier';
import { RegistrationForm } from './RegistrationForm';
export interface registrationInterface {
  onCloseRegistrationModal: () => void,
  userType: string
  setUserType: Dispatch<SetStateAction<string>>;
}

export const RegistrationContainer = ({ onCloseRegistrationModal, userType, setUserType }: registrationInterface) => {

  const [clickedId, setClickedId] = useState(-1);

  return (
    <>
      <ChooseUserType setUserType={setUserType} clickedId={clickedId} setClickedId={setClickedId}></ChooseUserType>
      <RegistrationForm userType={userType} setUserType={setUserType} onCloseRegistrationModal={onCloseRegistrationModal} />
      {/* {userType === 'Food lover' ? <FormFoodLover onCloseRegistrationModal={onCloseRegistrationModal} ></FormFoodLover>
        : userType === 'Restaurant' ? <FormRestaurant onCloseRegistrationModal={onCloseRegistrationModal}></FormRestaurant>
          : userType === 'Supplier' ? <FormSupplier onCloseRegistrationModal={onCloseRegistrationModal}></FormSupplier>
            : null
      } */}
    </>
  )
}