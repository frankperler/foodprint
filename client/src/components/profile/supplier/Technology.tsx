import React from 'react';
import { useState } from 'react';
import { EditDescription, CheckBoxForm, EnergySourceGrid, TechChoiceGrid, TechnologyContainer, TechnologyRibbons, InnerForm, VehicleTypeForm, UpdateChangesButton, EnergyTypeForm, CancelButton } from '../profile-styled-components/profile.style';
import { suppliers } from '../../../mock';
import { Checkbox, Icon } from 'semantic-ui-react'


export const Technology = (): JSX.Element => {

  const [ isEditing, setIsEditing ] = useState(false)

  return (
    <TechnologyContainer>
      <EditDescription onClick={() => !isEditing ? setIsEditing(true) : setIsEditing(false)}>
        { isEditing ? 
          <CancelButton>Cancel</CancelButton>
          :
          <Icon name='edit' size="large"/>
        }
      </EditDescription>
      <TechnologyRibbons>
        {suppliers[2].sup_greenTech.map(t => {
          return <div><h6>{t}</h6></div>
        })}
      </TechnologyRibbons>
        <TechChoiceGrid>
        {isEditing ?
        <EnergySourceGrid>
          <CheckBoxForm>
            <div>
              <EnergyTypeForm>
                <h4>Main source of energy (choose up to 2)</h4>
                <InnerForm>
                  <Checkbox label={{ children: 'Solar'}}/>
                  <Checkbox label={{ children: 'Wind'}}/>
                  <Checkbox label={{ children: 'Natural gas'}}/>
                  <Checkbox label={{ children: 'Electricity (renewable)'}}/>
                </InnerForm>
              </EnergyTypeForm>
              <VehicleTypeForm>
                <h4>The majority of my vehicles are...</h4>
                <InnerForm>
                  <Checkbox label={{ children: 'Biofuel'}}/>
                  <Checkbox label={{ children: 'Gasoline'}}/>
                  <Checkbox label={{ children: 'Diesel'}}/>
                  <Checkbox label={{ children: 'Electric'}}/>
                  <Checkbox label={{ children: 'Hybrid'}}/>
                </InnerForm>
              </VehicleTypeForm>
            </div>
            <UpdateChangesButton type="submit">Update changes</UpdateChangesButton>
          </CheckBoxForm>
        </EnergySourceGrid>
            :
            <EnergySourceGrid>
            <CheckBoxForm>
              <div>
                <EnergyTypeForm>
                  <h4>Main source of energy (choose up to 2)</h4>
                  <InnerForm>
                    <Checkbox readOnly label={{ children: 'Solar'}}/>
                    <Checkbox readOnly label={{ children: 'Wind'}}/>
                    <Checkbox readOnly label={{ children: 'Natural gas'}}/>
                    <Checkbox readOnly label={{ children: 'Electricity (renewable)'}}/>
                  </InnerForm>
                </EnergyTypeForm>
                <VehicleTypeForm>
                  <h4>The majority of my vehicles are...</h4>
                  <InnerForm>
                    <Checkbox readOnly label={{ children: 'Biofuel'}}/>
                    <Checkbox readOnly label={{ children: 'Gasoline'}}/>
                    <Checkbox readOnly label={{ children: 'Diesel'}}/>
                    <Checkbox readOnly label={{ children: 'Electric'}}/>
                    <Checkbox readOnly label={{ children: 'Hybrid'}}/>
                  </InnerForm>
                </VehicleTypeForm>
              </div>
            </CheckBoxForm>
          </EnergySourceGrid>
        }
      </TechChoiceGrid>
    </TechnologyContainer>
  )
}