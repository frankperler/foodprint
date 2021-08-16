import React from 'react'
import { useState } from 'react';
import ChooseUserType from './ChooseUserType'
import { FormFoodLover } from './FormFoodLover';
import { FormRestaurant } from './FormRestaurant';
import { FormSupplier } from './FormSupplier';

export const RegistrationContainer = (): JSX.Element => {

  const [clickedId, setClickedId] = useState(-1);

  const [userType, setUserType] = useState('');



  return (
    <> 
      <ChooseUserType setUserType={setUserType} clickedId={clickedId} setClickedId={setClickedId}></ChooseUserType>
      { userType === 'Food lover' ? <FormFoodLover></FormFoodLover> 
                : userType === 'Restaurant' ? <FormRestaurant></FormRestaurant>
                : userType === 'Supplier' ? <FormSupplier></FormSupplier>
                : null  
      }
    </>
  )
}