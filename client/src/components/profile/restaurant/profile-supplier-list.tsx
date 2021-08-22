import React from 'react';
import { AddSupplier, ProfileHeader, ButtonWrap, SupplierContainer, SupplierListContainer } from '../profile-styled-components/profile.style';
import { SupplierCard } from './profile-supplier-card';
import { AddCircle } from '@material-ui/icons';
import { restaurantTypes, supplierTypes } from '../../../types';

type Props = {
  restaurant: restaurantTypes
}

export const SuppliersList: React.FunctionComponent<Props> = ({ restaurant }: Props) => {

  return (
    <SupplierContainer>
      <ButtonWrap>
        <AddSupplier>
          <AddCircle fontSize="large" />
          <h4>Add supplier</h4>
        </AddSupplier>
      </ButtonWrap>
      <ProfileHeader>Who we get our food from...</ProfileHeader>
      <SupplierListContainer>
        {restaurant.Suppliers && restaurant.Suppliers.map((supplier: supplierTypes) => {
          return <SupplierCard key={supplier.sup_id} supplier={supplier} />
        })}
      </SupplierListContainer>
    </SupplierContainer>
  )
}