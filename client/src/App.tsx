import React from 'react'
import { Navbar } from './components/navbar/navbar'
import { Dashboard } from './components/dashboard/dashboard'
import { Searchbar } from './components/searchbar/searchbar'
import { ProfileFoodLoverContainer } from './components/profile/ProfileFoodLoverContainer'
import { ProfileRestaurantContainer } from './components/profile/ProfileRestaurantContainer'
import { ProfileSupplierContainer } from './components/profile/ProfileSupplierContainer'


export const App: React.FunctionComponent = () => {
  return (
    <div>
      <ProfileSupplierContainer></ProfileSupplierContainer>
    </div>
  )
}

export default App
