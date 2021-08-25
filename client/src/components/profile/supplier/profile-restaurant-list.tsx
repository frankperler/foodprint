import React from 'react';
import { ButtonWrap, RestoListContainer, SupplierContainer, AddSupplier, ProfileHeader } from '../profile-styled-components/profile.style';
import { RestaurantCard } from './profile-restaurant-card';
import { AddCircle } from '@material-ui/icons';
import { restaurantTypes } from '../../../types/restaurant-types';
import { supplierTypes } from '../../../types';
import { Link } from 'react-router-dom'

interface Props {
  supplier: supplierTypes,
  isOwner: boolean
}
export const RestaurantList: React.FunctionComponent<Props> = ({ supplier, isOwner }: Props) => {

  return (
    <SupplierContainer>
      {!isOwner ? <div></div> :
        <ButtonWrap>
          <Link to="/add" style={{ textDecoration: 'none' }}>
            <AddSupplier>
              <AddCircle fontSize="large" style={{ display: 'inline-block' }} /> <h4>Add restaurant</h4>
            </AddSupplier>
          </Link>
        </ButtonWrap>
      }
      <ProfileHeader>Who we're selling to...</ProfileHeader>
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