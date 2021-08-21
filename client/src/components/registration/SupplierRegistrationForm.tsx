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
  sup_name: yup.string(),
  sup_address: yup.string(),
  sup_city: yup.string(),
  country: yup.string(),
  zip: yup.string(),
  sup_phone_number: yup.string(),
  email: yup.string().required('required'),
  password: yup.string().min(8).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})

type SupplierRegisterForm = {
  user_type: string;
  user_first_name: string;
  user_last_name: string;
  sup_name: string;
  sup_address: string;
  sup_city: string;
  country: string;
  zip: string;
  sup_phone_number: string;
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

export const SupplierRegistrationForm = ({ userType, setIsAuth }: Props) => {

  const { register, handleSubmit, setValue, getValues, reset, formState: { errors } } = useForm<SupplierRegisterForm>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: SupplierRegisterForm) => {
    // will need to submit data on the database for registration
    setIsAuth(true)
    setValue('user_type', 'supplier')
    console.log(getValues());
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
          <div>
            <Label>Business name</Label>
            <EstablishmentInput type="text" {...register('sup_name')} />
            <div className="invalid-feedback">{errors.sup_name?.message}</div>
            <Label>Business address</Label>
            <EstablishmentInput type="text" {...register('sup_address')} />
            <div className="invalid-feedback">{errors.sup_address?.message}</div>
            <AddressTwoWrapper>
              <div>
                <Label>City</Label>
                <AddressTwoInput type="text" {...register('sup_city')} />
                <div className="invalid-feedback">{errors.sup_city?.message}</div>
              </div>
              <div>
                <Label>Zip code</Label>
                <AddressTwoInput type="text" {...register('zip')} />
                <div className="invalid-feedback">{errors.zip?.message}</div>
              </div>
            </AddressTwoWrapper>
            <Label>Country</Label>
            <EstablishmentInput type="text" {...register('country')} />
            <div className="invalid-feedback">{errors.country?.message}</div>
            <Label>Phone</Label>
            <EstablishmentInput type="text" {...register('sup_phone_number')} />
            <div className="invalid-feedback">{errors.sup_phone_number?.message}</div>
          </div>
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