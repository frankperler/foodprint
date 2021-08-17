import React from 'react';
import { HomePageButton } from '../../navbar/navbar-styled-components/homepagebutton';
import { Title } from '../../navbar/navbar-styled-components/title'
import { Navcontainer } from '../../navbar/navbar-styled-components/navcontainer'
import { Container } from '../../navbar/navbar-styled-components/container'
import { Avatar, ProfileNav, UserName } from '../profile-styled-components/profile.style';
import { ProfileSupplierDashboard } from './ProfileSupplierDashboard';

export const ProfileSupplierContainer = (): JSX.Element => {


  return (
    <>
<<<<<<< HEAD
      <Container containerHeight="4rem">
        <Navcontainer>
          <Title><strong>food</strong>print.</Title>
          <div>
            <UserName>Supplier</UserName>
            <Avatar></Avatar>
            <HomePageButton>Log out</HomePageButton>
          </div>
        </Navcontainer >
      </Container >
      <ProfileSupplierDashboard></ProfileSupplierDashboard>
    </>
=======
  <Container containerHeight="auto">
    <Navcontainer>
      <Title><strong>food</strong>print.</Title>
      <ProfileNav>
        <UserName>Supplier</UserName>
        <Avatar></Avatar>
      </ProfileNav>
    </Navcontainer >
  </Container >
  <ProfileSupplierDashboard></ProfileSupplierDashboard>
  </>
>>>>>>> profile
  )
}
