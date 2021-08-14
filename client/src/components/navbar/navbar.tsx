import React from 'react'
import { Navbutton } from './navbutton'
import { Title } from './title'
import { Navcontainer } from './navcontainer'

export const Navbar: React.FunctionComponent = () => {
  return (
    <Navcontainer>
      <Title><strong>food</strong>print.</Title>
      <div>
        <Navbutton>Sign up!</Navbutton>
        <Navbutton>Log in!</Navbutton>
      </div>
    </Navcontainer >
  )
}

