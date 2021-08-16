import React from 'react'
import { FormFoodLover } from './components/registration/FormFoodLover'
import ChooseUserType from './components/registration/ChooseUserType'
import { Searchbar } from './components/add-partner/Searchbar'
import { FormLogIn } from './components/log-in/FormLogIn'
import { RegistrationContainer } from './components/registration/RegistrationContainer'
import { LogInContainer } from './components/log-in/LogInContainer'

function App(): JSX.Element {
  return <div className="App">
    <RegistrationContainer></RegistrationContainer>
    <LogInContainer></LogInContainer>
    </div>
}

export default App
