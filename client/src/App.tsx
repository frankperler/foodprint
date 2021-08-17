import React from 'react'
import { Navbar } from './components/navbar/navbar'
import { Dashboard } from './components/dashboard/dashboard'
import { Searchbar } from './components/searchbar/searchbar'
import { ProfileSupplierContainer } from './components/profile/supplier/ProfileSupplierContainer'
import { RegistrationContainer } from './components/registration/RegistrationContainer'
import { FormSupplier } from './components/registration/FormSupplier'
import ChooseUserType from './components/registration/ChooseUserType'



export const App: React.FunctionComponent = () => {
  return (
    <div>
      <ProfileSupplierContainer></ProfileSupplierContainer>
    </div>
  )
}

export default App
