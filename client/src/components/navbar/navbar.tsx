import React from 'react'
import { Navbutton } from './navbar-styled-components/navbutton'
import { Title } from './navbar-styled-components/title'
import { Navcontainer } from './navbar-styled-components/navcontainer'
import { Container } from './navbar-styled-components/container'

export const Navbar: React.FunctionComponent = () => {
  return (
    <Container containerHeight="4rem">
      <Navcontainer>
        <Title><strong>food</strong>print.</Title>
        <div>
          <Navbutton>Sign up!</Navbutton>
          <Navbutton>Log in!</Navbutton>
        </div>
      </Navcontainer >
    </Container >
  )
}

