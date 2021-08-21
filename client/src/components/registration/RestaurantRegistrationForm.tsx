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
  rest_name: yup.string(),
  rest_address: yup.string(),
  rest_city: yup.string(),
  country: yup.string(),
  zip: yup.string(),
  rest_phone_number: yup.string(),
  email: yup.string().required('required'),
  password: yup.string().min(8).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})

type RestaurantRegisterForm = {
  user_type: string;
  user_first_name: string;
  user_last_name: string;
  rest_name: string;
  rest_address: string;
  rest_city: string;
  country: string;
  zip: string;
  rest_phone_number: string;
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

export const RestaurantRegistrationForm = ({ userType, setIsAuth }: Props) => {

  const { register, handleSubmit, setValue, getValues, reset, formState: { errors } } = useForm<RestaurantRegisterForm>({
    resolver: yupResolver(schema),
  })


  const onSubmit = (data: RestaurantRegisterForm) => {
    // will need to submit data on the database for registration
    setIsAuth(true)
    setValue('user_type', 'restaurant')
    setValue('rest_address', (data['rest_address'].concat(', ', data['rest_city'], ', ', data['zip'], ', ', data['country'])))
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
            <EstablishmentInput type="text" {...register('rest_name')} />
            <div className="invalid-feedback">{errors.rest_name?.message}</div>
            <Label>Business address</Label>
            <EstablishmentInput type="text" {...register('rest_address')}  />
            <div className="invalid-feedback">{errors.rest_address?.message}</div>
            <AddressTwoWrapper>
              <div>
                <Label>City</Label>
                <AddressTwoInput type="text" {...register('rest_city')} />
                <div className="invalid-feedback">{errors.rest_city?.message}</div>
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
            <EstablishmentInput type="text" {...register('rest_phone_number')} />
            <div className="invalid-feedback">{errors.rest_phone_number?.message}</div>
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