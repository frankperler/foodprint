import React from 'react'
import { FormRegister } from './components/registration/FormRegister'
import ChooseUserType from './components/registration/ChooseUserType'
import { Searchbar } from './components/add-partner/Searchbar'

function App(): JSX.Element {
  return <div className="App">
    <ChooseUserType></ChooseUserType>
    <FormRegister></FormRegister>
    <Searchbar></Searchbar>
    </div>
}

export default App
