import React from 'react';
import { AddPartnerButton, ButtonWrap, RestoListContainer, SupplierContainer } from '../profile-styled-components/profile.style';
import { restos } from '../../../mock';
import { RestaurantCard } from './RestaurantCard';

export const RestaurantList = (): JSX.Element => {

  return (
    <SupplierContainer>
      <h3>Who I'm selling to...</h3>
      <ButtonWrap>
      <AddPartnerButton>Add restaurant</AddPartnerButton>
      </ButtonWrap>
      <RestoListContainer>
        {restos.map(resto => {
          return <RestaurantCard key={resto.place_id} resto={resto}/>
        })}
      </RestoListContainer>
    </SupplierContainer>
  )
}