import React from 'react';
import { ButtonWrap, RestoListContainer, SupplierContainer, AddSupplier, ProfileHeader } from '../profile-styled-components/profile.style';
import { RestaurantCard } from './profile-restaurant-card';
import { AddCircle } from '@material-ui/icons';
import { restaurantTypes } from '../../../types/restaurant-types';
import { supplierTypes } from '../../../types';

interface Props {
  supplier: supplierTypes
}

export const RestaurantList: React.FunctionComponent<Props> = ({ supplier }: Props) => {

  return (
    <SupplierContainer>
      <ButtonWrap>
        <AddSupplier>
          <AddCircle fontSize="large" style={{ display: 'inline-block' }} /> <h4 style={{ display: 'inline-block' }}>Add restaurant</h4>
        </AddSupplier>
      </ButtonWrap>
      <ProfileHeader>Who I'm selling to...</ProfileHeader>
      <RestoListContainer>
        {supplier.Restaurants && supplier.Restaurants.map((restaurant: restaurantTypes) => {
          return (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          )
        })}
      </RestoListContainer>
    </SupplierContainer>
  )
}