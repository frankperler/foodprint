import React from 'react';
import { HomePageButton } from '../../navbar/navbar-styled-components/homepagebutton';
import { Title } from '../../navbar/navbar-styled-components/title'
import { Navcontainer } from '../../navbar/navbar-styled-components/navcontainer'
import { Container } from '../../navbar/navbar-styled-components/container'
import { Avatar, UserName } from '.././profile-styled-components/profile.style';
import { ProfileRestaurantDashboard } from './ProfileRestaurantDashboard';

export const ProfileRestaurantContainer = (): JSX.Element => {


  return (
    <>
      <Container containerHeight="4rem">
        <Navcontainer>
          <Title><strong>food</strong>print.</Title>
          <div>
            <UserName>Restaurant</UserName>
            <Avatar></Avatar>
            <HomePageButton>Log out</HomePageButton>
          </div>
        </Navcontainer >
      </Container >
      <ProfileRestaurantDashboard></ProfileRestaurantDashboard>
    </>
  )
}
