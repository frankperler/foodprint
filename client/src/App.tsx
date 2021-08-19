import React, { useState } from 'react'
import { Navbar } from './components/navbar/navbar'
import { Dashboard } from './components/dashboard/dashboard'
import { Searchbar } from './components/searchbar/searchbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App: React.FunctionComponent = () => {

  const [userType, setUserType] = useState("Food lover")
  const [isAuth, setIsAuth] = useState(false)

  return (
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
          <Dashboard userType={userType} />
        </Route>

        <Route path='/supplier/:id'>
          {/* <Navbar />
          <Searchbar />
          <Dashboard /> */}
        </Route>

        <Route path='/restaurant/:id'>
          {/* <Navbar />
          <Searchbar />
          <Dashboard /> */}
        </Route>

      </Switch>
    </Router>
  )
}

export default App