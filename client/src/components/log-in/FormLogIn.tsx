import { Dispatch, SetStateAction, useReducer } from 'react';
import { FormWrapper } from '../registration/registration-styled-components/FormRegister.style';
import { ForgotPassword, LogInButton } from './log-in-styled-components/FormLogIn.style';
import { LogInCredentialInput, Label } from './log-in-styled-components/FormLogIn.style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { userLoginReducers, userLoginState } from '../../reducers/login-reducer';
import { logIn } from '../../services/LoginService';
import { loginTypes, userTypes } from '../../types';
import { useEffect } from 'react';


export interface Props {
  onCloseLoginModal: () => void,
  userType: string,
  setUserType: Dispatch<SetStateAction<string>>,
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>,
}


type LogInForm = {
  email: string;
  password: string;
  // confirmPassword: string;
};

const schema = yup.object().shape({
  email: yup.string().required('required'),
  password: yup.string().required(),
  // confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})


export const FormLogIn = ({ onCloseLoginModal, setIsAuth }: Props): JSX.Element => {
  
  const [stateUserLogin, dispatchUserLogin] = useReducer(userLoginReducers, userLoginState)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<LogInForm>({
    resolver: yupResolver(schema),
  })

  // need handleSubmit, might need to setUserType on receiving back data from API hence why imported
    
  const onSubmit = (credentials: loginTypes) => {
    logIn(credentials)
      .then((userData: userTypes) => {
      //STATE IS NOT BEING SYNCHRONOUSLY UPDATED ---- CANNOT SEE IT THE NEW STATE IS CORRECT!!!!! 
      console.log("new user local state", stateUserLogin )   
        dispatchUserLogin({type: 'LOGIN', payload: userData})
      })
    
    setIsAuth(true)
    const formData = {
      email: credentials['email'],
      password: credentials['password'],
    }
    // console.log(formData);
    onCloseLoginModal()
    reset();
  };


  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Email</Label>
          <LogInCredentialInput type="text" {...register('email')}></LogInCredentialInput>
          <div className="invalid-feedback" style={{ color: 'red' }}>{errors.email?.message}</div>
        </div>
        <div>
          <Label>Password</Label>
          <LogInCredentialInput type="password" {...register('password')} ></LogInCredentialInput>
          <div className="invalid-feedback" style={{ color: 'red' }}>{errors.password?.message}</div>
        </div>
        <LogInButton type="submit">
          Log in
        </LogInButton>
        <ForgotPassword>Forgot password?</ForgotPassword>
      </form>
    </FormWrapper>
  )
}