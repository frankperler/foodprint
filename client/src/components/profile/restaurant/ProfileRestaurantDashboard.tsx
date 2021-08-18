import React, { useReducer } from 'react'
import { GridContainer, RestoCover } from '../profile-styled-components/profile.style'
import { filterReducers, filterState } from '../../../reducers/filters-reducers'
import { filterContext } from '../../../contexts/filters-contexts'
import { Photo, ProfileDetails } from '../profile-styled-components/profile.style'
import { RestaurantDescription } from './RestaurantDescription'
import { SuppliersList } from './SuppliersList'
import { EcoLeafContainer, InfoArea, InfoHeader, InteriorArea } from '../profile-styled-components/profile.style';
import { EcoLeaf } from '../profile-styled-components/profile.style'
import { Popup } from 'semantic-ui-react'

import { restos } from '../../../mock'

export const ProfileRestaurantDashboard: React.FunctionComponent = () => {

  const [state, dispatch] = useReducer(filterReducers, filterState)

  return (
    <GridContainer>
      <Photo>
        <RestoCover src={restos[2].rest_picture}/>
      </Photo>
      <filterContext.Provider value={{ state, dispatch }}>
      <InfoArea>
          <InteriorArea>
          <InfoHeader>{restos[2].rest_name}</InfoHeader>
          <h4>{restos[2].rest_address}</h4>
          <Popup content='Learn more about how your eco-score is calculated' trigger={          <EcoLeafContainer>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
          </EcoLeafContainer>} />
          <h4>{restos[2].opening_hours}</h4>
          </InteriorArea>
        </InfoArea>
      </filterContext.Provider>
      <ProfileDetails>
        <RestaurantDescription></RestaurantDescription>
        <SuppliersList></SuppliersList>
      </ProfileDetails>
    </GridContainer>
  )
}