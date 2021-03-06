import React from 'react';
import { AddSupplier, ProfileHeader, ButtonWrap, SupplierContainer, SupplierListContainer } from '../profile-styled-components/profile.style';
import { SupplierCard } from './profile-supplier-card';
import { AddCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { restaurantTypes, supplierTypes } from '../../../types';

type Props = {
  restaurant: restaurantTypes;
  isOwner: boolean;
}

export const SuppliersList: React.FunctionComponent<Props> = ({ restaurant, isOwner }: Props) => {

  return (
    <SupplierContainer>
      {!isOwner ? <div></div> :
        <ButtonWrap>
          <Link to="/add" style={{ textDecoration: 'none' }}>
            <AddSupplier style={{ color: "#84DCC6" }}>
              <AddCircle fontSize="large" />
              <h4>Add supplier</h4>
            </AddSupplier>
          </Link>
        </ButtonWrap>
      }
      <ProfileHeader>Who we get our food from...</ProfileHeader>
      <SupplierListContainer>
        {restaurant.Suppliers && restaurant.Suppliers.map((supplier: supplierTypes) => {
          return <SupplierCard key={supplier.id} supplier={supplier} />
        })}
      </SupplierListContainer>
    </SupplierContainer>
  )
}