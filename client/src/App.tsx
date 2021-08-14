import React from 'react'
import FormRegister from './components/registration/FormRegister'
import ChooseUserType from './components/registration/ChooseUserType'

function App(): JSX.Element {
  return <div className="App">
    <ChooseUserType></ChooseUserType>
    <FormRegister></FormRegister>
    </div>
}

export default App
