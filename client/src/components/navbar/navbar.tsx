import { useState, Dispatch, SetStateAction } from 'react'
import { HomePageButton, LogInButton } from './navbar-styled-components/homepagebutton'
import { Title } from './navbar-styled-components/title'
import { Navcontainer } from './navbar-styled-components/navcontainer'
import { HomeButtonFlex } from './navbar-styled-components/homebuttonflex'
import { Container } from './navbar-styled-components/container'
import Modal from 'react-modal';
import { FormLogIn } from '../log-in/FormLogIn'
import { Link } from 'react-router-dom'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    marginTop: "2%",
    height: "auto",
    transform: 'translate(-50%, -50%)',
    background: "white",
    borderRadius: "7px",
    paddingTop: "120px",
    paddingBottom: "120px",
    paddingLeft: "96px",
    paddingRight: "96px",
    zIndex: 999
  },
};

interface Props {
  userType: string,
  setUserType: Dispatch<SetStateAction<string>>,
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>,
}

export const Navbar: React.FunctionComponent<Props> = ({ userType, setUserType, isAuth, setIsAuth }: Props) => {

  Modal.setAppElement('#root');

  // const [openRegistration, setOpenRegistration] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState<boolean>(false);


  const onOpenLoginModal = () => setOpenLogin(true);
  const onCloseLoginModal = () => setOpenLogin(false);

  const clickLogOut = () => {
    setIsAuth(false)
    setUserType('Food lover') // food lover as default value
  }


  return (
    <Container containerHeight="4rem" topPosition="0" navPosition="sticky">
      <Navcontainer>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Title><strong>food</strong>print.</Title>
        </Link>
        {isAuth === false ?
          <HomeButtonFlex>
            <div>
              <LogInButton onClick={onOpenLoginModal}>Log in</LogInButton>
              <Modal isOpen={openLogin} style={customStyles} onRequestClose={onCloseLoginModal}>
                <Title><strong>food</strong>print.</Title>
                <FormLogIn
                  userType={userType}
                  setUserType={setUserType}
                  onCloseLoginModal={onCloseLoginModal}
                  isAuth={isAuth}
                  setIsAuth={setIsAuth} />
              </Modal>
            </div>
            <div>
              <Link to={'/register'}>
                <HomePageButton>Sign up</HomePageButton>
              </Link>
            </div>
          </HomeButtonFlex> :
          <LogInButton onClick={clickLogOut}>Log out</LogInButton>}
      </Navcontainer >
    </Container >
  )
}

