import { useState, Dispatch, SetStateAction } from 'react'
import { HomePageButton } from './navbar-styled-components/homepagebutton'
import { Title } from './navbar-styled-components/title'
import { Navcontainer } from './navbar-styled-components/navcontainer'
import { Container } from './navbar-styled-components/container'
import Modal from 'react-modal';
import { RegistrationContainer } from '../registration/RegistrationContainer'
import { FormLogIn } from '../log-in/FormLogIn'
import { Link } from 'react-router-dom'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    marginTop: "1%",
    height: "auto",
    transform: 'translate(-50%, -50%)',
    background: "whitesmoke",
    borderRadius: "7px"
  },
};

interface Props {
  userType: string,
  setUserType: Dispatch<SetStateAction<string>>,
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>,
}

export const Navbar = ({ userType, setUserType, isAuth, setIsAuth }: Props) => {

  Modal.setAppElement('#root');

  const [openRegistration, setOpenRegistration] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  const onOpenRegistrationModal = () => setOpenRegistration(true);
  const onCloseRegistrationModal = () => setOpenRegistration(false);
  const onOpenLoginModal = () => setOpenLogin(true);
  const onCloseLoginModal = () => setOpenLogin(false);

  const clickLogOut = () => {
    setIsAuth(false)
    setUserType('Food lover') // food lover as default value
  }


  return (
    <Container containerHeight="4rem" topPosition="0%" navPosition="sticky">
      <Navcontainer>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Title><strong>food</strong>print.</Title>
        </Link>
        {isAuth === false ?
          <div>
            <HomePageButton onClick={onOpenRegistrationModal}>Sign up!</HomePageButton>
            <Modal isOpen={openRegistration} style={customStyles} onRequestClose={onCloseRegistrationModal}>
              <RegistrationContainer
                userType={userType}
                setUserType={setUserType}
                onCloseRegistrationModal={onCloseRegistrationModal}
                isAuth={isAuth}
                setIsAuth={setIsAuth} />
            </Modal>

            <HomePageButton onClick={onOpenLoginModal}>Log In!</HomePageButton>
            <Modal isOpen={openLogin} style={customStyles} onRequestClose={onCloseLoginModal}>
              <FormLogIn
                userType={userType}
                setUserType={setUserType}
                onCloseLoginModal={onCloseLoginModal}
                isAuth={isAuth}
                setIsAuth={setIsAuth} />
            </Modal>
          </div> :
          <HomePageButton onClick={clickLogOut}>Log out!</HomePageButton>}
      </Navcontainer >
    </Container >
  )
}

