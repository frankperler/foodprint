import { useState } from 'react';
import ChooseUserType from './ChooseUserType'
import { FormFoodLover } from './FormFoodLover';
import { FormRestaurant } from './FormRestaurant';
import { FormSupplier } from './FormSupplier';

export interface modalInterface {
  onCloseRegistrationModal: () => void
}

export const RegistrationContainer = ({ onCloseRegistrationModal }: modalInterface) => {

  const [clickedId, setClickedId] = useState(-1);
  const [userType, setUserType] = useState<string>('');

  return (
    <>
      <ChooseUserType setUserType={setUserType} clickedId={clickedId} setClickedId={setClickedId}></ChooseUserType>
      {userType === 'Food lover' ? <FormFoodLover onCloseRegistrationModal={onCloseRegistrationModal} ></FormFoodLover>
        : userType === 'Restaurant' ? <FormRestaurant onCloseRegistrationModal={onCloseRegistrationModal}></FormRestaurant>
          : userType === 'Supplier' ? <FormSupplier onCloseRegistrationModal={onCloseRegistrationModal}></FormSupplier>
            : null
      }
    </>
  )
}