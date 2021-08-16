import React from 'react'
import { FormFoodLover } from './components/registration/FormFoodLover'
import ChooseUserType from './components/registration/ChooseUserType'
import { Searchbar } from './components/add-partner/Searchbar'
import { FormLogIn } from './components/log-in/FormLogIn'
import { FormSupplier } from './components/registration/FormSupplier'
import { FormRestaurant } from './components/registration/FormRestaurant'
import { RegistrationContainer } from './components/registration/RegistrationContainer'

function App(): JSX.Element {
  return <div className="App">
    <RegistrationContainer></RegistrationContainer>
    </div>
}

export default App
