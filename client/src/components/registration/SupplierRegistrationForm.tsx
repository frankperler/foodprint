import { Dispatch, SetStateAction, useReducer } from 'react';
import { FormWrapper } from './registration-styled-components/FormRegister.style';
import { RegisterNameInput, CredentialInput, AddressTwoInput, AddressTwoWrapper, EstablishmentInput, Label } from './registration-styled-components/FormRegister.style';
import { RegisterButton } from './registration-styled-components/FormRegister.style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { registerUser } from '../../services/RegisterService';
import { registrationReducers, registrationState } from '../../reducers/registration-reducers';
import { registrationFormUserTypes, registeredUserTypes } from '../../types/user-types';

const schema = yup.object().shape({
  user_first_name: yup.string().required('required'),
  user_last_name: yup.string().required('required'),
  sup_name: yup.string().required('required'),
  sup_address: yup.string().required('required'),
  sup_city: yup.string().required('required'),
  country: yup.string().required('required'),
  zip: yup.string().required('required'),
  sup_phone_number: yup.string().required('required'),
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
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>,
}

export const SupplierRegistrationForm: React.FunctionComponent<Props> = ({ setIsAuth }: Props) => {

  const { register, handleSubmit, setValue, getValues, reset, formState: { errors } } = useForm<SupplierRegisterForm>({
    resolver: yupResolver(schema),
  })

  const [stateRegistrationUser, dispatchRegistrationUser] = useReducer(registrationReducers, registrationState)


  const onSubmit = async (data: SupplierRegisterForm) => {

    // will need to submit data on the database for registration
    setValue('user_type', 'supplier')
    const user_type = getValues('user_type')
    setValue('sup_address', (data['sup_address'].concat(', ', data['sup_city'], ', ', data['zip'], ', ', data['country'])))
    const address = getValues('sup_address');

    const formData: registrationFormUserTypes = {
      user_type: user_type,
      user_first_name: data['user_first_name'],
      user_last_name: data['user_last_name'],
      sup_name: data['sup_name'],
      sup_address: address,
      sup_city: data['sup_city'],
      sup_phone_number: data['sup_phone_number'],
      email: data['email'],
      password: data['password'],
    }

    await registerUser(formData)
      .then((userData: registeredUserTypes) => {
        setIsAuth(true)
        dispatchRegistrationUser({ type: 'REGISTER', payload: userData })
      })

    reset();
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>First name</Label>
        <RegisterNameInput type="text" {...register('user_first_name')} />
        <div className="invalid-feedback" style={{ color: 'red' }}>{errors.user_first_name?.message}</div>

        <Label>Last name</Label>
        <RegisterNameInput type="text" {...register('user_last_name')} />
        <div className="invalid-feedback" style={{ color: 'red' }}>{errors.user_last_name?.message}</div>

        <div>
          <Label>Business name</Label>
          <EstablishmentInput type="text" {...register('sup_name')} />
          <div className="invalid-feedback" style={{ color: 'red' }}>{errors.sup_name?.message}</div>

          <Label>Business address</Label>
          <EstablishmentInput type="text" {...register('sup_address')} />
          <div className="invalid-feedback" style={{ color: 'red' }}>{errors.sup_address?.message}</div>

          <AddressTwoWrapper>
            <div>
              <Label>City</Label>
              <AddressTwoInput type="text" {...register('sup_city')} />
              <div className="invalid-feedback" style={{ color: 'red' }}>{errors.sup_city?.message}</div>
            </div>
            <div>
              <Label>Zip code</Label>
              <AddressTwoInput type="text" {...register('zip')} />
              <div className="invalid-feedback" style={{ color: 'red' }}>{errors.zip?.message}</div>
            </div>
          </AddressTwoWrapper>

          <Label>Country</Label>
          <EstablishmentInput type="text" {...register('country')} />
          <div className="invalid-feedback" style={{ color: 'red' }}>{errors.country?.message}</div>

          <Label>Phone</Label>
          <EstablishmentInput type="text" {...register('sup_phone_number')} />
          <div className="invalid-feedback" style={{ color: 'red' }}>{errors.sup_phone_number?.message}</div>
        </div>

        <Label>Email</Label>
        <CredentialInput type="text" {...register('email')} />
        <div className="invalid-feedback" style={{ color: 'red' }}>{errors.email?.message}</div>

        <Label>Password</Label>
        <CredentialInput type="password" {...register('password')} />
        <div className="invalid-feedback" style={{ color: 'red' }}>{errors.password?.message}</div>

        <Label>Password confirmation</Label>
        <CredentialInput type="password" {...register('confirmPassword')} />
        <div className="invalid-feedback" style={{ color: 'red' }}>{errors.confirmPassword?.message}</div>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <RegisterButton type="submit" onClick={handleSubmit(onSubmit)}>Register</RegisterButton>
        </Link>
      </form>
    </FormWrapper>
  )
}