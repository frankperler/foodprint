import React from 'react'
import { Navbar } from './components/navbar/navbar'
import { Dashboard } from './components/dashboard/dashboard'
import './App.css'

export const App: React.FunctionComponent = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  )
}

export default App
