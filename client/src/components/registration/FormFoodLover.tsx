import React from 'react';
import { RegisterButton, FormWrapper } from './registration-styled-components/FormRegister.style';
import { RegisterNameInput, CredentialInput, Label } from './registration-styled-components/FormRegister.style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationInterface } from './RegistrationContainer';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().required('required'),
  password: yup.string().min(8).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})

type UserRegisterForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};


export const FormFoodLover = ({ onCloseRegistrationModal }: registrationInterface) => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<UserRegisterForm>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: UserRegisterForm) => {
    // console.log(JSON.stringify(data, null, 2));
    onCloseRegistrationModal()
    reset();
  };


  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>First name</Label>
        <RegisterNameInput type="text" {...register('firstName')} />
        <div className="invalid-feedback">{errors.firstName?.message}</div>
        <Label>Last name</Label>
        <RegisterNameInput type="text" {...register('lastName')} />
        <div className="invalid-feedback">{errors.lastName?.message}</div>
        <Label>Email</Label>
        <CredentialInput type="text" {...register('email')} />
        <div className="invalid-feedback">{errors.email?.message}</div>
        <Label>Password</Label>
        <CredentialInput type="password" {...register('password')} />
        <div className="invalid-feedback">{errors.password?.message}</div>
        <Label>Password confirmation</Label>
        <CredentialInput type="password" {...register('confirmPassword')} />
        <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
        <Link to="/user">
          <RegisterButton type="submit">Register</RegisterButton>
        </Link>
      </form>
    </FormWrapper>
  )
}

