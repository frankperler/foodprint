
import React from 'react';
import { useState } from 'react';
import { EditDescription, CheckBoxForm, EnergySourceGrid, TechChoiceGrid, TechnologyContainer, TechnologyRibbons, InnerForm, VehicleTypeForm, UpdateChangesButton, EnergyTypeForm, CancelButton } from '../profile-styled-components/profile.style';
import { suppliers } from '../../../mock';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import { green } from '@material-ui/core/colors';


const GreenCheckbox = withStyles({
  root: {
    color: '#84DCC6',
    '&$checked': {
      color: '#84DCC6',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


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
                    control={<GreenCheckbox />} 
                    label="Solar"
                  />
                  <FormControlLabel
                    control={<GreenCheckbox name='Wind'/>} 
                    label='Wind'
                  />
                  <FormControlLabel label="Natural gas"
                    control={<GreenCheckbox name='Natural gas'/>} 
                  />
                  <FormControlLabel
                    control={<GreenCheckbox name='Electricity (renewable)'/>} 
                    label="Electricity (renewable)"
                  />
                </FormGroup>
              </EnergyTypeForm>
              <VehicleTypeForm>
                <h4>The majority of my vehicles are...</h4>
                <FormLabel component="legend">Pick two</FormLabel>
                <FormGroup>
                <FormControlLabel
                  control={<GreenCheckbox name='Biofuel'/>} 
                  label="Biofuel"
                  />
                <FormControlLabel
                  control={<GreenCheckbox name='Gasoline'/>} 
                  label="Gasoline"
                  />
                <FormControlLabel
                  control={<GreenCheckbox name='Diesel'/>} 
                  label="Diesel"
                  />
                <FormControlLabel
                  control={<GreenCheckbox name='Electric'/>} 
                  label="Electric"
                  />
                <FormControlLabel
                  control={<GreenCheckbox name='Hybrid'/>} 
                  label="Hybrid"
                  />
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
                  <FormControlLabel
                    disabled control={<GreenCheckbox name='Solar'/>} 
                    label="Solar"
                  />
                  <FormControlLabel
                    disabled control={<GreenCheckbox name='Wind'/>} 
                    label='Wind'
                  />
                  <FormControlLabel label="Natural gas"
                    disabled control={<GreenCheckbox name='Natural gas'/>} 
                  />
                  <FormControlLabel
                    disabled control={<GreenCheckbox name='Electricity (renewable)'/>} 
                    label="Electricity (renewable)"
                  />
                  </FormGroup>
                </EnergyTypeForm>
                <VehicleTypeForm>
                  <h4>The majority of my vehicles are...</h4>
                  <FormGroup>
                  <FormControlLabel
                  disabled control={<GreenCheckbox name='Biofuel'/>} 
                  label="Biofuel"
                  />
                <FormControlLabel
                  disabled control={<GreenCheckbox name='Gasoline'/>} 
                  label="Gasoline"
                  />
                <FormControlLabel
                  disabled control={<GreenCheckbox name='Diesel'/>} 
                  label="Diesel"
                  />
                <FormControlLabel
                  disabled control={<GreenCheckbox name='Electric'/>} 
                  label="Electric"
                  />
                <FormControlLabel
                  disabled control={<GreenCheckbox name='Hybrid'/>} 
                  label="Hybrid"
                  />
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