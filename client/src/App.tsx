import React, { useState, useReducer } from 'react'
import { Navbar } from './components/navbar/navbar'
import { Dashboard } from './components/dashboard/dashboard'
import { Searchbar } from './components/searchbar/searchbar'
import { ProfileSupplierDashboard } from './components/profile/supplier/profile-supplier-dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RegistrationContainer } from './components/registration/RegistrationContainer'
import { ProfileRestaurantDashboard } from './components/profile/restaurant/profile-restaurant-dashboard'
import { ContainerFindExistingPartner } from './components/add-partner/find-existing-partner'
import { ContainerThirdPartyRequestPartner } from './components/add-partner/third-party-request'
import { userContext } from './contexts/user-context'
import { userLoginReducers, userLoginState } from './reducers/login-reducer';
import { ThankYouPage } from './components/add-partner/thank-you-page'
import { useEffect } from 'react'

export const App: React.FunctionComponent = () => {

  const [stateUser, dispatchUser] = useReducer(userLoginReducers, userLoginState)
  const [userType, setUserType] = useState("Food lover")
  const [isAuth, setIsAuth] = useState(false)
  const [loading, setLoading] = useState(true);

  //to persist state on refresh
  useEffect(() => {
    dispatchUser({ type: 'LOGIN', payload: JSON.parse(window.localStorage.getItem('user-state')!) });
    setIsAuth(JSON.parse(window.localStorage.getItem('is-auth')!))
  }, []);

  useEffect(() => {
    window.localStorage.setItem('user-state', JSON.stringify(stateUser))
    window.localStorage.setItem('is-auth', JSON.stringify(isAuth))
  })

  return (
    <userContext.Provider value={{ stateUser, dispatchUser }} >
      <Router>
        <Switch>
          <Route path='/' exact>
            <Navbar
              isAuth={isAuth}
              setIsAuth={setIsAuth}
            />
            <Searchbar />
            <Dashboard
              isAuth={isAuth}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          <Route path='/register' exact>
            <RegistrationContainer
              userType={userType}
              setUserType={setUserType}
              isAuth={isAuth}
              setIsAuth={setIsAuth}
            />
          </Route>

          <Route path='/add' exact>
            <ContainerFindExistingPartner />
          </Route>

          <Route path='/invite' exact>
            <ContainerThirdPartyRequestPartner />
          </Route>

          <Route path='/thankyou' exact>
            <ThankYouPage />
          </Route>

          <Route path='/supplier/:id'>
            <Navbar
              isAuth={isAuth}
              setIsAuth={setIsAuth}
            />
            <ProfileSupplierDashboard />
          </Route>

          <Route path='/restaurant/:id'>
            <Navbar
              isAuth={isAuth}
              setIsAuth={setIsAuth}
            />
            <ProfileRestaurantDashboard
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  )
}

export default App