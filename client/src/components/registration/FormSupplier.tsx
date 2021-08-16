import React from 'react';
import { FormWrapper } from './registration-styled-components/FormRegister.style';
import { RegisterNameInput, CredentialInput, AddressTwoInput, AddressTwoWrapper, EstablishmentInput, Label } from './registration-styled-components/FormRegister.style';
import { RegisterButton } from './registration-styled-components/FormRegister.style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  supplierName: yup.string().required('required'),
  businessAddress: yup.string().required('required'),
  city: yup.string().required('required'),
  zip: yup.string().required('required'),
  phone: yup.string().required('required'),
  email: yup.string().required('required'),
  password: yup.string().min(8).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})

type UserRegisterForm = {
  firstName: string;
  lastName: string;
  supplierName: string;
  businessAddress: string;
  city: string;
  zip: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};


export const FormSupplier = (): JSX.Element => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<UserRegisterForm>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: UserRegisterForm) => {
    console.log(JSON.stringify(data, null, 2));
    reset();
  };


  return (
    <FormWrapper>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Label>First name</Label>
      <RegisterNameInput type="text" {...register('firstName')}/>
      <div className="invalid-feedback">{errors.firstName?.message}</div>
    <Label>Last name</Label>
      <RegisterNameInput type="text" {...register('lastName')}/> 
      <div className="invalid-feedback">{errors.lastName?.message}</div>
    <Label>Supplier name</Label>
      <EstablishmentInput type="text" {...register('supplierName')}/>
      <div className="invalid-feedback">{errors.supplierName?.message}</div>
    <Label>Business address</Label>
      <EstablishmentInput type="text" {...register('businessAddress')}/>
      <div className="invalid-feedback">{errors.businessAddress?.message}</div>
    <AddressTwoWrapper>
      <div>
        <Label>City</Label>
        <AddressTwoInput type="text" {...register('city')}/>
        <div className="invalid-feedback">{errors.city?.message}</div>
      </div>
      <div>
        <Label>Zip code</Label>
        <AddressTwoInput type="text" {...register('zip')}/>
        <div className="invalid-feedback">{errors.zip?.message}</div>
      </div>
    </AddressTwoWrapper>
      <Label>Phone</Label>
      <EstablishmentInput type="text" {...register('phone')}/>
      <div className="invalid-feedback">{errors.phone?.message}</div>
      <Label>Email</Label>
        <CredentialInput type="text" {...register('email')}/>
        <div className="invalid-feedback">{errors.email?.message}</div>
      <Label>Password</Label>
        <CredentialInput type="password" {...register('password')}/>
        <div className="invalid-feedback">{errors.password?.message}</div>
      <Label>Password confirmation</Label>
        <CredentialInput type="password" {...register('confirmPassword')}/>
        <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
      <RegisterButton type="submit">Register</RegisterButton>
    </form>
    </FormWrapper>
  )
}