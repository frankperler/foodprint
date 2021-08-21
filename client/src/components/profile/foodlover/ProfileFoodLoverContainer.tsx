import React from 'react';
import { HomePageButton } from '../../navbar/navbar-styled-components/homepagebutton';
import { Title } from '../../navbar/navbar-styled-components/title'
import { Navcontainer } from '../../navbar/navbar-styled-components/navcontainer'
import { Container } from '../../navbar/navbar-styled-components/container'
import { ProfileFoodLoverDashboard } from './ProfileFoodLoverDashboard';

export const ProfileFoodLoverContainer = (): JSX.Element => {


  return (
    <>
      <Container containerHeight="4rem">
        <Navcontainer>
          <Title><strong>food</strong>print.</Title>
          <div>
            <h1>User</h1>
            <HomePageButton>Avatar</HomePageButton>
            <HomePageButton>Log out</HomePageButton>
          </div>
        </Navcontainer >
      </Container >
      <ProfileFoodLoverDashboard></ProfileFoodLoverDashboard>
    </>
  )
}
