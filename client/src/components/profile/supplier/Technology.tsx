
import React from 'react';
import { useState } from 'react';
import { EditDescription, ProfileHeader, EnergySourceGrid, TechChoiceGrid, TechnologyContainer, TechnologyRibbons, VehicleTypeForm, UpdateChangesButton, EnergyTypeForm, CancelButton } from '../profile-styled-components/profile.style';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/styles';

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

  const [isEditing, setIsEditing] = useState(false)

  return (
    <TechnologyContainer>
      <EditDescription onClick={() => !isEditing ? setIsEditing(true) : setIsEditing(false)}>
        {isEditing ?
          <CancelButton>Cancel</CancelButton>
          :
          <EditIcon></EditIcon>
        }
      </EditDescription>
      <ProfileHeader>Our technology...</ProfileHeader>
      <TechnologyRibbons>
        {/* {suppliers[2].sup_greenTech.map(t => {
          return <div><h6>{t}</h6></div>
        })} */}
        <img src="/images/biodynamic_s.svg" />
        <img src="/images/savewater_s.svg" />
        <img src="/images/nopesticide_s.svg" />
        <img src="/images/noplastic_s.svg" />
        <img src="/images/biofuel_s.svg" />
        <img src="/images/nongmo_s.svg" />
        <img src="/images/organic_s.svg" />
        <img src="/images/nogrowthhormone_s.svg" />
      </TechnologyRibbons>
      <TechChoiceGrid>
        {isEditing ?
          <EnergySourceGrid>
            <FormControl component="fieldset">
              <div>
                <EnergyTypeForm>
                  <h4>Main source of energy</h4>
                  <FormLabel component="legend">Select up to two</FormLabel>
                  <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
                    <FormControlLabel
                      control={<GreenCheckbox />}
                      label="Solar"
                    />
                    <FormControlLabel
                      control={<GreenCheckbox />}
                      label='Wind'
                    />
                    <FormControlLabel label="Natural gas"
                      control={<GreenCheckbox />}
                    />
                    <FormControlLabel
                      control={<GreenCheckbox />}
                      label="Electricity (renewable)"
                    />
                  </FormGroup>
                </EnergyTypeForm>
                <VehicleTypeForm>
                  <h4>The majority of my vehicles are...</h4>
                  <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
                    <FormControlLabel
                      control={<GreenCheckbox />}
                      label="Biofuel"
                    />
                    <FormControlLabel
                      control={<GreenCheckbox />}
                      label="Gasoline"
                    />
                    <FormControlLabel
                      control={<GreenCheckbox />}
                      label="Diesel"
                    />
                    <FormControlLabel
                      control={<GreenCheckbox />}
                      label="Electric"
                    />
                    <FormControlLabel
                      control={<GreenCheckbox />}
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
                  <h4>Main source of energy</h4>
                  <FormLabel component="legend">Select up to two</FormLabel>
                  <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
                    <FormControlLabel
                      disabled control={<GreenCheckbox />}
                      label="Solar"
                    />
                    <FormControlLabel
                      disabled control={<GreenCheckbox />}
                      label='Wind'
                    />
                    <FormControlLabel label="Natural gas"
                      disabled control={<GreenCheckbox />}
                    />
                    <FormControlLabel
                      disabled control={<GreenCheckbox />}
                      label="Electricity (renewable)"
                    />
                  </FormGroup>
                </EnergyTypeForm>
                <VehicleTypeForm>
                  <h4>The majority of my vehicles are...</h4>
                  <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
                    <FormControlLabel
                      disabled control={<GreenCheckbox />}
                      label="Biofuel"
                    />
                    <FormControlLabel
                      disabled control={<GreenCheckbox />}
                      label="Gasoline"
                    />
                    <FormControlLabel
                      disabled control={<GreenCheckbox />}
                      label="Diesel"
                    />
                    <FormControlLabel
                      disabled control={<GreenCheckbox />}
                      label="Electric"
                    />
                    <FormControlLabel
                      disabled control={<GreenCheckbox />}
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