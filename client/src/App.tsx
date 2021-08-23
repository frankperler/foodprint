import React, { useState, useReducer} from 'react'
import { Navbar } from './components/navbar/navbar'
import { Dashboard } from './components/dashboard/dashboard'
import { Searchbar } from './components/searchbar/searchbar'
import { ProfileSupplierDashboard } from './components/profile/supplier/profile-supplier-dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RegistrationContainer } from './components/registration/RegistrationContainer'
import { ProfileRestaurantDashboard } from './components/profile/restaurant/profile-restaurant-dashboard'
import { userTypes } from './types'
import { userContext } from './contexts/user-context'
import { userLoginReducers, userLoginState } from './reducers/login-reducer';



export const App: React.FunctionComponent = () => {
  
  const [stateUser, dispatchUser] = useReducer(userLoginReducers, userLoginState)
  const [userType, setUserType] = useState("Food lover")
  const [isAuth, setIsAuth] = useState(false)

  return (
    <userContext.Provider value={{stateUser, dispatchUser}} >
    <Router>
      <Switch>
        <Route path='/' exact>
          <Navbar
            userType={userType}
            setUserType={setUserType}
            isAuth={isAuth}
            setIsAuth={setIsAuth}
          />
          <Searchbar />
          <Dashboard
            userType={userType}
            isAuth={isAuth}
          />
        </Route>
        <Route path='/register' exact>
          <RegistrationContainer
            userType={userType}
            setUserType={setUserType}
            isAuth={isAuth}
            setIsAuth={setIsAuth}
          ></RegistrationContainer>
        </Route>

        <Route path='/supplier/:id'>
          <Navbar
            userType={userType}
            setUserType={setUserType}
            isAuth={isAuth}
            setIsAuth={setIsAuth}
          />
          <ProfileSupplierDashboard />
        </Route>

        <Route path='/restaurant/:id'>
          <Navbar
            userType={userType}
            setUserType={setUserType}
            isAuth={isAuth}
            setIsAuth={setIsAuth}
          />
          <ProfileRestaurantDashboard />
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  )
}

export default App