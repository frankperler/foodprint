import React from 'react'
import { Navbutton } from './navbutton'
import { Title } from './title'
import { Navcontainer } from './navcontainer'
import { Container } from './container'

export const Navbar: React.FunctionComponent = () => {
  return (
    <Container>
      <Navcontainer>
        <Title><strong>food</strong>print.</Title>
        <div>
          <Navbutton>Sign up!</Navbutton>
          <Navbutton>Log in!</Navbutton>
        </div>
      </Navcontainer >
    </Container>
  )
}

