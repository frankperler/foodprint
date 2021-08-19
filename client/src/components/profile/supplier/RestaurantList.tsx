import React from 'react';
import { ButtonWrap, RestoListContainer, SupplierContainer, AddSupplier } from '../profile-styled-components/profile.style';
import { restos } from '../../../mock';
import { RestaurantCard } from './RestaurantCard';
import { Icon } from 'semantic-ui-react';

export const RestaurantList = (): JSX.Element => {

  return (
    <SupplierContainer>
      <ButtonWrap>
        <AddSupplier>
          <Icon name="plus" size="big" /> Add restaurant
        </AddSupplier>
      </ButtonWrap>
      <h2>Who I'm selling to...</h2>
      <RestoListContainer>
        {restos.map(resto => {
          return <RestaurantCard key={resto.place_id} resto={resto}/>
        })}
      </RestoListContainer>
    </SupplierContainer>
  )
}