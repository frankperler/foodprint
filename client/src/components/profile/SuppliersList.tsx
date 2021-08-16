import React from 'react';
import { AddPartnerButton, ButtonWrap, SupplierContainer } from './profile-styled-components/profile.style';


export const SuppliersList = (): JSX.Element => {



  return (
    <SupplierContainer>
      <ButtonWrap>
      <AddPartnerButton>Add supplier</AddPartnerButton>
      </ButtonWrap>
    </SupplierContainer>
  )
}