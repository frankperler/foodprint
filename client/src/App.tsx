
import React from 'react'
import { Navbar } from './components/navbar/navbar'
import { Dashboard } from './components/dashboard/dashboard'
import { Searchbar } from './components/searchbar/searchbar'
import { FormLogIn } from './components/log-in/FormLogIn'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App: React.FunctionComponent = () => {

  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Navbar />
          <Searchbar />
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default App