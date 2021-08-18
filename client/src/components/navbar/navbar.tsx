import React, { useState } from 'react'
import { HomePageButton } from './navbar-styled-components/homepagebutton'
import { Title } from './navbar-styled-components/title'
import { Navcontainer } from './navbar-styled-components/navcontainer'
import { Container } from './navbar-styled-components/container'
import Modal from 'react-modal';
import { RegistrationContainer } from '../registration/RegistrationContainer'
import { FormLogIn } from '../log-in/FormLogIn'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Navbar: React.FunctionComponent = () => {

  Modal.setAppElement('#root');

  const [openRegistration, setOpenRegistration] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  const onOpenRegistrationModal = () => setOpenRegistration(true);
  const onCloseRegistrationModal = () => setOpenRegistration(false);

  const onOpenLoginModal = () => setOpenLogin(true);
  const onCloseLoginModal = () => setOpenLogin(false);

  return (
    <Container containerHeight="4rem">
      <Navcontainer>
        <Title><strong>food</strong>print.</Title>
        <div>
          <HomePageButton onClick={onOpenRegistrationModal}>Sign up!</HomePageButton>
          <Modal isOpen={openRegistration} style={customStyles} onRequestClose={onCloseRegistrationModal}>
            <RegistrationContainer />
          </Modal>

          <HomePageButton onClick={onOpenLoginModal}>Log In!</HomePageButton>
          <Modal isOpen={openLogin} style={customStyles} onRequestClose={onCloseLoginModal}>
            <FormLogIn />
          </Modal>
        </div>
      </Navcontainer >
    </Container >
  )
}

