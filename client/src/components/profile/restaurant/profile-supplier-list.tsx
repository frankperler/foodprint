import React from 'react';
import { AddSupplier, ProfileHeader, ButtonWrap, InteriorSupplierContainer, SupplierContainer, SupplierListContainer } from '../profile-styled-components/profile.style';
import { suppliers } from '../../../mock';
import { SupplierCard } from './profile-supplier-card';
import { AddCircle } from '@material-ui/icons';

export const SuppliersList = (): JSX.Element => {

  return (
    <SupplierContainer>
      <InteriorSupplierContainer>
        <ButtonWrap>
          <AddSupplier>
            <AddCircle fontSize="large" style={{ display: 'inline-block' }} /> <h4 style={{ display: 'inline-block' }}>Add supplier</h4>
          </AddSupplier>
        </ButtonWrap>
        <ProfileHeader>Who we get our food from...</ProfileHeader>
        <SupplierListContainer>
          {suppliers.map(supplier => {
            return <SupplierCard key={supplier.sup_id} supplier={supplier} />
          })}
        </SupplierListContainer>
      </InteriorSupplierContainer>
    </SupplierContainer>
  )
}