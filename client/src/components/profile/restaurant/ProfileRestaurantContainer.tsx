import React from 'react';
import { HomePageButton } from '../../navbar/navbar-styled-components/homepagebutton';
import { Title } from '../../navbar/navbar-styled-components/title'
import { Navcontainer } from '../../navbar/navbar-styled-components/navcontainer'
import { Container } from '../../navbar/navbar-styled-components/container'
import { Avatar, ProfileNav, UserName } from '.././profile-styled-components/profile.style';
import { ProfileRestaurantDashboard } from './ProfileRestaurantDashboard';
import 'semantic-ui-css/semantic.min.css'

export const ProfileRestaurantContainer = (): JSX.Element => {


  return (
    <>
  <Container containerHeight="auto">
    <Navcontainer>
      <Title><strong>food</strong>print.</Title>
      <ProfileNav>
        <UserName>Username</UserName>
        <Avatar></Avatar>
      </ProfileNav>
    </Navcontainer >
  </Container >
  <ProfileRestaurantDashboard></ProfileRestaurantDashboard>
  </>
  )
}