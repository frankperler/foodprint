import { Dispatch, SetStateAction } from 'react';
import { FormWrapper } from '../registration/registration-styled-components/FormRegister.style';
import { FormCredentialElements } from './FormCredentialElements';
import { ForgotPassword, LogInButton } from './log-in-styled-components/FormLogIn.style';
import { logIn } from '../../services/LoginService';

export interface Props {
  onCloseLoginModal: () => void,
  userType: string,
  setUserType: Dispatch<SetStateAction<string>>,
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>,
}

export const FormLogIn = ({ onCloseLoginModal, setIsAuth }: Props): JSX.Element => {

  // need handleSubmit, might need to setUserType on receiving back data from API hence why imported

  return (
    <FormWrapper>
      <form onSubmit={() => {
        setIsAuth(true)
        onCloseLoginModal
      }}>
        <FormCredentialElements></FormCredentialElements>
        <LogInButton onClick={() => {
          // logIn({email: 'andrew@codeowrks.com', password: 'iloveburgers123'})
          setIsAuth(true)
          onCloseLoginModal()
        }}>
          Log in
        </LogInButton>
        <ForgotPassword>Forgot password?</ForgotPassword>
      </form>
    </FormWrapper>
  )
}