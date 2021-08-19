
import React from 'react';
import { useState } from 'react';
import { EditDescription, CheckBoxForm, EnergySourceGrid, TechChoiceGrid, TechnologyContainer, TechnologyRibbons, InnerForm, VehicleTypeForm, UpdateChangesButton, EnergyTypeForm, CancelButton } from '../profile-styled-components/profile.style';
import { suppliers } from '../../../mock';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';


export const Technology = (): JSX.Element => {

  const [ isEditing, setIsEditing ] = useState(false)

  return (
    <TechnologyContainer>
      <EditDescription onClick={() => !isEditing ? setIsEditing(true) : setIsEditing(false)}>
        { isEditing ? 
          <CancelButton>Cancel</CancelButton>
          :
          <EditIcon></EditIcon>
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
          <FormControl component="fieldset">
            <div>
              <EnergyTypeForm>
                <h4>Main source of energy (choose up to 2)</h4>
                <FormLabel component="legend">Pick two</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name='Solar'/>} 
                    label="Solar"
                  />
                  <FormControlLabel
                    disabled control={<Checkbox name='Wind'/>} 
                    label='Wind'
                  />
                  <FormControlLabel label="Natural gas"
                    control={<Checkbox name='Natural gas'/>} 
                  />
                  <FormControlLabel
                    control={<Checkbox name='Electricity (renewable)'/>} 
                    label="Electricity (renewable)"
                  />
                </FormGroup>
              </EnergyTypeForm>
              <VehicleTypeForm>
                <h4>The majority of my vehicles are...</h4>
                <FormLabel component="legend">Pick two</FormLabel>
                <FormGroup>
                  <Checkbox name='Biofuel'/>
                  <Checkbox name='Gasoline'/>
                  <Checkbox name='Diesel'/>
                  <Checkbox name='Electric'/>
                  <Checkbox name='Hybrid'/>
                </FormGroup>
              </VehicleTypeForm>
            </div>
            <UpdateChangesButton type="submit">Update changes</UpdateChangesButton>
          </FormControl>
        </EnergySourceGrid>
            :
            <EnergySourceGrid>
            <FormControl>
              <div>
                <EnergyTypeForm>
                  <h4>Main source of energy (choose up to 2)</h4>
                  <FormGroup>
                    <Checkbox name={'Solar'}/>
                    <Checkbox name={'Wind'}/>
                    <Checkbox name={'Natural gas'}/>
                    <Checkbox name={'Electricity (renewable)'}/>
                  </FormGroup>
                </EnergyTypeForm>
                <VehicleTypeForm>
                  <h4>The majority of my vehicles are...</h4>
                  <FormGroup>
                    <Checkbox name={'Biofuel'}/>
                    <Checkbox name={'Gasoline'}/>
                    <Checkbox name={'Diesel'}/>
                    <Checkbox name={'Electric'}/>
                    <Checkbox name={'Hybrid'}/>
                  </FormGroup>
                </VehicleTypeForm>
              </div>
            </FormControl>
          </EnergySourceGrid>
        }
      </TechChoiceGrid>
    </TechnologyContainer>
  )
}