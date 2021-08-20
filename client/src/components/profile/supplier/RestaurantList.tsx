import React from 'react';
import { ButtonWrap, RestoListContainer, SupplierContainer, AddSupplier, ProfileHeader } from '../profile-styled-components/profile.style';
import { restos } from '../../../mock';
import { RestaurantCard } from './RestaurantCard';
import { restaurantTypes } from '../../../types/restaurant-types';
import AddIcon from '@material-ui/icons/Add';
import { AddCircle } from '@material-ui/icons';

export const RestaurantList = (): JSX.Element => {

  return (
    <SupplierContainer>
      <ButtonWrap>
        <AddSupplier>
          <AddCircle fontSize="large" style={{display: 'inline-block'}}/> <h4 style={{display: 'inline-block'}}>Add restaurant</h4>
        </AddSupplier>
      </ButtonWrap>
      <ProfileHeader>Who I'm selling to...</ProfileHeader>
      <RestoListContainer>
        {restos.map((resto: restaurantTypes) => {
          return <RestaurantCard key={resto.place_id} resto={resto} />
        })}
      </RestoListContainer>
    </SupplierContainer>
  )
}