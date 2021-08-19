import React from 'react'
import { Navbar } from './components/navbar/navbar'
import { Dashboard } from './components/dashboard/dashboard'
import { Searchbar } from './components/searchbar/searchbar'
import { ProfileSupplierContainer } from './components/profile/supplier/ProfileSupplierContainer'
import { RegistrationContainer } from './components/registration/RegistrationContainer'
import { FormSupplier } from './components/registration/FormSupplier'
import ChooseUserType from './components/registration/ChooseUserType'
import { ContainerFindExistingPartner } from './components/add-partner/ContainerFindExistingPartner'
import { ContainerThirdPartyRequestPartner } from './components/add-partner/ContainerThirdPartyRequestPartner'
import { ProfileRestaurantContainer } from './components/profile/restaurant/ProfileRestaurantContainer'


export const App: React.FunctionComponent = () => {
  return (
    <ProfileRestaurantContainer></ProfileRestaurantContainer>
  )
}

export default App
