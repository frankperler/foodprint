import React from 'react';
import { EnergySourceGrid, TechChoiceGrid, TechnologyContainer, TechnologyRibbons } from '../profile-styled-components/profile.style';
import { suppliers } from '../../../mock';
import { Checkbox } from 'semantic-ui-react'


export const Technology = (): JSX.Element => {



  return (
    <TechnologyContainer>
      <TechnologyRibbons>
      {suppliers[2].sup_greenTech.map(t => {
        return <div><h6>{t}</h6></div>
      })}
      </TechnologyRibbons>
      <div>
        <TechChoiceGrid>
        <div>
        <h4>Main source of energy (choose up to 2)</h4>
          <EnergySourceGrid>
            <Checkbox label={{ children: 'Solar-powered'}}/>
            <Checkbox label={{ children: 'Wind-powered'}}/>
            <Checkbox label={{ children: 'Natural gas'}}/>
            <Checkbox label={{ children: 'Electricity (renewable)'}}/>
            <Checkbox label={{ children: 'Electricity (non-renewable)'}}/>
          </EnergySourceGrid>
        </div>
        <div>
          <h4>The majority of my vehicles are...</h4>
          <EnergySourceGrid>
            <Checkbox label={{ children: 'Biofuel'}}/>
            <Checkbox label={{ children: 'Gasoline'}}/>
            <Checkbox label={{ children: 'Diesel'}}/>
            <Checkbox label={{ children: 'Electric'}}/>
            <Checkbox label={{ children: 'Hybrid'}}/>
          </EnergySourceGrid>
        </div>
      </TechChoiceGrid>
      </div>
    </TechnologyContainer>
  )
}