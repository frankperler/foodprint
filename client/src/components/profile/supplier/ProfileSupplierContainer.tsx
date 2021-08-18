import React from 'react';
import { Navbutton } from '../../navbar/navbar-styled-components/navbutton'
import { Title } from '../../navbar/navbar-styled-components/title'
import { Navcontainer } from '../../navbar/navbar-styled-components/navcontainer'
import { Container } from '../../navbar/navbar-styled-components/container'
import { Avatar, ProfileNav, UserName } from '../profile-styled-components/profile.style';
import { ProfileSupplierDashboard } from './ProfileSupplierDashboard';

export const ProfileSupplierContainer = (): JSX.Element => {


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
  <ProfileSupplierDashboard></ProfileSupplierDashboard>
  </>
  )
}
