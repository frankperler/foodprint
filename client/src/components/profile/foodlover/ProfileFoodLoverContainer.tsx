import React from 'react';
import { Navbutton } from '../../navbar/navbar-styled-components/navbutton'
import { Title } from '../../navbar/navbar-styled-components/title'
import { Navcontainer } from '../../navbar/navbar-styled-components/navcontainer'
import { Container } from '../../navbar/navbar-styled-components/container'
import { UserName } from '../profile-styled-components/profile.style';
import { ProfileFoodLoverDashboard } from './ProfileFoodLoverDashboard';

export const ProfileFoodLoverContainer = (): JSX.Element => {


  return (
    <>
  <Container containerHeight="4rem">
    <Navcontainer>
      <Title><strong>food</strong>print.</Title>
      <div>
        <UserName>User</UserName>
        <Navbutton>Avatar</Navbutton>
        <Navbutton>Log out</Navbutton>
      </div>
    </Navcontainer >
  </Container >
  <ProfileFoodLoverDashboard></ProfileFoodLoverDashboard>
  </>
  )
}
