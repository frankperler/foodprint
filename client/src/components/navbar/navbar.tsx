import React from 'react'
import { HomePageButton } from './navbar-styled-components/homepagebutton'
import { Title } from './navbar-styled-components/title'
import { Navcontainer } from './navbar-styled-components/navcontainer'
import { Container } from './navbar-styled-components/container'

export const Navbar: React.FunctionComponent = () => {
  return (
    <Container containerHeight="4rem">
      <Navcontainer>
        <Title><strong>food</strong>print.</Title>
        <div>
          <HomePageButton>Sign up!</HomePageButton>
          <HomePageButton>Log in!</HomePageButton>
        </div>
      </Navcontainer >
    </Container >
  )
}

