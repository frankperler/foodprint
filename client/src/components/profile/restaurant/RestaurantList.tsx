import React from 'react';
import { AddPartnerButton, ButtonWrap, SupplierContainer } from '../profile-styled-components/profile.style';


export const RestaurantList = (): JSX.Element => {



  return (
    <SupplierContainer>
      <ButtonWrap>
        <AddPartnerButton>Add restaurant</AddPartnerButton>
      </ButtonWrap>
    </SupplierContainer>
  )
}