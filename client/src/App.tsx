
import React from 'react'
import { Navbar } from './components/navbar/navbar'
import { Dashboard } from './components/dashboard/dashboard'
import { Searchbar } from './components/searchbar/searchbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App: React.FunctionComponent = () => {

  return (
    <Router>
      <Switch>

        <Route path='/' exact>
          <Navbar />
          <Searchbar />
          <Dashboard />
        </Route>

        <Route path='/supplier'>
          <Navbar />
          <Searchbar />
          <Dashboard />
        </Route>

        <Route path='/restaurant'>
          <Navbar />
          <Searchbar />
          <Dashboard />
        </Route>

        <Route path='/user'>
          <Navbar />
          <Searchbar />
          <Dashboard />
        </Route>

      </Switch>
    </Router>
  )
}

export default App