import React from 'react';
import { ButtonWrap, RestoListContainer, SupplierContainer, AddSupplier, ProfileHeader } from '../profile-styled-components/profile.style';
import { restos } from '../../../mock';
import { RestaurantCard } from './profile-restaurant-card';
import { AddCircle } from '@material-ui/icons';
import { restaurantTypes } from '../../../types/restaurant-types';

export const RestaurantList: React.FunctionComponent = () => {

  return (
    <SupplierContainer>
      <ButtonWrap>
        <AddSupplier>
          <AddCircle fontSize="large" style={{ display: 'inline-block' }} /> <h4 style={{ display: 'inline-block' }}>Add restaurant</h4>
        </AddSupplier>
      </ButtonWrap>
      <ProfileHeader>Who I'm selling to...</ProfileHeader>
      <RestoListContainer>
        {restos.map((resto: restaurantTypes) => {
          return <RestaurantCard key={resto.id} resto={resto} />
        })}
      </RestoListContainer>
    </SupplierContainer>
  )
}