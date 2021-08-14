import React from 'react'
import { Navbar } from './components/navbar/navbar'
import { Dashboard } from './components/dashboard/dashboard'
import { Searchbar } from './components/searchbar/searchbar'
import './App.css'

export const App: React.FunctionComponent = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Dashboard />
    </div>
  )
}

export default App
