import React, { useState } from 'react'
import { Navbar } from './components/navbar/navbar'
import { Dashboard } from './components/dashboard/dashboard'
import { Searchbar } from './components/searchbar/searchbar'
import { ProfileSupplierDashboard } from './components/profile/supplier/ProfileSupplierDashboard'
import { ProfileRestaurantDashboard } from './components/profile/restaurant/ProfileRestaurantDashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App: React.FunctionComponent = () => {

  const [userType, setUserType] = useState("Food lover")
  const [isAuth, setIsAuth] = useState(false)

  return (
    <ProfileSupplierDashboard></ProfileSupplierDashboard>
  )
}

export default App