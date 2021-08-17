import React from 'react';
import { Navbutton } from '../../navbar/navbar-styled-components/navbutton'
import { Title } from '../../navbar/navbar-styled-components/title'
import { Navcontainer } from '../../navbar/navbar-styled-components/navcontainer'
import { Container } from '../../navbar/navbar-styled-components/container'
import { Avatar, UserName } from '../profile-styled-components/profile.style';
import { ProfileSupplierDashboard } from './ProfileSupplierDashboard';

export const ProfileSupplierContainer = (): JSX.Element => {


  return (
    <>
  <Container containerHeight="4rem">
    <Navcontainer>
      <Title><strong>food</strong>print.</Title>
      <div>
        <UserName>Supplier</UserName>
        <Avatar></Avatar>
        <Navbutton>Log out</Navbutton>
      </div>
    </Navcontainer >
  </Container >
  <ProfileSupplierDashboard></ProfileSupplierDashboard>
  </>
  )
}
