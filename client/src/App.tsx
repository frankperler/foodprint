import React from 'react'
import { FormRegister } from './components/registration/FormRegister'
import ChooseUserType from './components/registration/ChooseUserType'
import { Searchbar } from './components/add-partner/Searchbar'
import { FormLogIn } from './components/log-in/FormLogIn'
import { FormSupplier } from './components/registration/FormSupplier'
import { FormRestaurant } from './components/registration/FormRestaurant'

function App(): JSX.Element {
  return <div className="App">
    <ChooseUserType></ChooseUserType>
    <FormRegister></FormRegister>
    </div>
}

export default App
