import { Dispatch, SetStateAction } from 'react';
import { FormWrapper } from '../registration/registration-styled-components/FormRegister.style';
import { FormCredentialElements } from './FormCredentialElements';
import { ForgotPassword, LogInButton } from './log-in-styled-components/FormLogIn.style';
import { LogInCredentialInput, Label } from './log-in-styled-components/FormLogIn.style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import * as yup from 'yup';




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
  confirmPassword: string;
};

const schema = yup.object().shape({
  email: yup.string().required('required'),
  password: yup.string().required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})


export const FormLogIn = ({ onCloseLoginModal, setIsAuth }: Props): JSX.Element => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<LogInForm>({
    resolver: yupResolver(schema),
  })

  // need handleSubmit, might need to setUserType on receiving back data from API hence why imported

  const onSubmit = (data: LogInForm) => {
    // will need to submit data on the database for registration
    setIsAuth(true)
    const formData = {
      email: data['email'],
      password: data['password'],
    }
    console.log(formData);
    onCloseLoginModal()
    reset();
  };


  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>Email</Label>
        <LogInCredentialInput type="text" {...register('email')}></LogInCredentialInput>
        <div className="invalid-feedback" style={{color: 'red'}}>{errors.email?.message}</div>
      </div>
      <div>
        <Label>Password</Label>
        <LogInCredentialInput type="password" {...register('password')} ></LogInCredentialInput>
        <div className="invalid-feedback" style={{color: 'red'}}>{errors.password?.message}</div>
      </div>
        <LogInButton type="submit">
          Log in
        </LogInButton>
        <ForgotPassword>Forgot password?</ForgotPassword>
      </form>
    </FormWrapper>
  )
}