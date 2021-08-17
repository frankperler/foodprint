import React from 'react';
import { Navbutton } from '../../navbar/navbar-styled-components/navbutton'
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
        <Navbutton>Log out</Navbutton>
      </div>
    </Navcontainer >
  </Container >
  <ProfileRestaurantDashboard></ProfileRestaurantDashboard>
  </>
  )
}
