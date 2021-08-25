
import React from 'react';
import { useState } from 'react';
import { EditDescription, ProfileHeader, TechnologySourceGrid, TextDetails, EnergySourceGrid, TechChoiceGrid, TechnologyContainer, TechnologyRibbons, VehicleTypeForm, UpdateChangesButton, EnergyTypeForm, CancelButton } from '../profile-styled-components/profile.style';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/styles';
import { supplierTypes } from '../../../types';

const GreenCheckbox = withStyles({
  root: {
    color: '#84DCC6',
    '&$checked': {
      color: '#84DCC6',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


interface Props {
  supplier: supplierTypes,
  greenTechObj: {
    "Plastic_Free": boolean,
    "Biodynamic": boolean,
    "Biofuels": boolean,
    "No_Growth_Hormones": boolean,
    "No_Pesticides": boolean,
    "Non_GMO": boolean,
    "Organic": boolean,
    "Water_Recycling": boolean,
  },
  isOwner: boolean
}
 

export const Technology: React.FunctionComponent<Props> = ({ supplier, greenTechObj, isOwner }: Props) => {

  const [isEditing, setIsEditing] = useState(false)

  function loopGreenTech(obj: {
    "Plastic_Free": boolean,
    "Biodynamic": boolean,
    "Biofuels": boolean,
    "No_Growth_Hormones": boolean,
    "No_Pesticides": boolean,
    "Non_GMO": boolean,
    "Organic": boolean,
    "Water_Recycling": boolean,
  }): any {
    const result = []
    for (const key in obj) {
      if (key === "Plastic_Free" && obj[key] === true) result.push("/images/noplastic_s.svg")
      if (key === "Biodynamic" && obj[key] === true) result.push("/images/biodynamic_s.svg")
      if (key === "Biofuels" && obj[key] === true) result.push("/images/biofuel_s.svg")
      if (key === "No_Growth_Hormones" && obj[key] === true) result.push("/images/nogrowthhormone_s.svg")
      if (key === "No_Pesticides" && obj[key] === true) result.push("/images/nopesticide_s.svg")
      if (key === "Non_GMO" && obj[key] === true) result.push("/images/nongmo_s.svg")
      if (key === "Organic" && obj[key] === true) result.push("/images/organic_s.svg")
      if (key === "Water_Recycling" && obj[key] === true) result.push("/images/savewater_s.svg")
    }
    return result.map((img) => {
      return <img src={img} />
    })
  }

  return (
    <TechnologyContainer>
      {!isOwner?  <div></div> :
      <EditDescription onClick={() => !isEditing ? setIsEditing(true) : setIsEditing(false)}>
        {isEditing ?
          <CancelButton>Cancel</CancelButton>
          :
          <EditIcon></EditIcon>
        }
      </EditDescription>
      }
      <ProfileHeader>Our technology...</ProfileHeader>
      <TechnologyRibbons>
        {supplier && loopGreenTech(greenTechObj)}
      </TechnologyRibbons>
      <TechChoiceGrid>
        {isEditing ?
          <TechnologySourceGrid>
            <FormControl component="fieldset">
              <div>
                <EnergyTypeForm>
                  <h4>Main source of energy</h4>
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
                  <h4>The majority of our vehicles are...</h4>
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
          </TechnologySourceGrid>
          :
          <EnergySourceGrid>
            <TextDetails fontColor="darkgrey">My main source of energy is {supplier.sup_energy.map((energy) => {
              return <h3 style={{ color: 'black' }}>{energy}</h3>
            })}</TextDetails>

            <TextDetails fontColor="darkgrey">The majority of my vehicles are using <h3 style={{ color: 'black' }}>{supplier.sup_vehicles}</h3></TextDetails>
          </EnergySourceGrid>
        }
      </TechChoiceGrid>
    </TechnologyContainer>
  )
}