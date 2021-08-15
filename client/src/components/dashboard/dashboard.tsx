import React from 'react'
import { FilterArea } from './filters/filters-area'
import { GridContainer } from './grid-container'
import { Map } from './map/map'
import { MapArea } from './map/map-area'
import { EcoScore } from './filters/eco-score-filter'

export const Dashboard: React.FunctionComponent = () => {



  return (
    <GridContainer>
      <MapArea>
        <Map />
      </MapArea>
      <FilterArea>
        <EcoScore />
      </FilterArea>
    </GridContainer>
  )
}
