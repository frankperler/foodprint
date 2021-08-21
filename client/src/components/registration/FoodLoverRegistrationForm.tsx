import { Dispatch, SetStateAction } from 'react';
import { FormWrapper } from './registration-styled-components/FormRegister.style';
import { RegisterNameInput, CredentialInput, AddressTwoInput, AddressTwoWrapper, EstablishmentInput, Label } from './registration-styled-components/FormRegister.style';
import { RegisterButton } from './registration-styled-components/FormRegister.style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const schema = yup.object().shape({
  user_first_name: yup.string().required('required'),
  user_last_name: yup.string().required('required'),
  email: yup.string().required('required'),
  password: yup.string().min(8).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})

type FoodLoverRegisterForm = {
  user_type: string;
  user_first_name: string;
  user_last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface Props {
  userType: string,
  setUserType: Dispatch<SetStateAction<string>>,
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>,
}

export const FoodLoverRegistrationForm = ({ userType, setIsAuth }: Props) => {

  const { register, handleSubmit, setValue, getValues, reset, formState: { errors } } = useForm<FoodLoverRegisterForm>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FoodLoverRegisterForm) => {
    // will need to submit data on the database for registration
    setIsAuth(true)
    setValue('user_type', 'food lover')
    const user_type = getValues('user_type')
    const formData = {
      user_type: user_type,
      user_first_name: data['user_first_name'],
      user_last_name: data['user_last_name'],
      email: data['email'],
      password: data['password'],
    }
    console.log(formData);
    reset();
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>First name</Label>
        <RegisterNameInput type="text" {...register('user_first_name')} />
        <div className="invalid-feedback">{errors.user_first_name?.message}</div>
        <Label>Last name</Label>
        <RegisterNameInput type="text" {...register('user_last_name')} />
        <div className="invalid-feedback">{errors.user_last_name?.message}</div>

        <Label>Email</Label>
        <CredentialInput type="text" {...register('email')} />
        <div className="invalid-feedback">{errors.email?.message}</div>
        <Label>Password</Label>
        <CredentialInput type="password" {...register('password')} />
        <div className="invalid-feedback">{errors.password?.message}</div>
        <Label>Password confirmation</Label>
        <CredentialInput type="password" {...register('confirmPassword')} />
        <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <RegisterButton type="submit" onClick={handleSubmit(onSubmit)}>Register</RegisterButton>
        </Link>
      </form>
    </FormWrapper>
  )
}