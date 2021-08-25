
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
  }
}

export const Technology: React.FunctionComponent<Props> = ({ supplier, greenTechObj }: Props) => {

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
      <EditDescription onClick={() => !isEditing ? setIsEditing(true) : setIsEditing(false)}>
        {isEditing ?
          <CancelButton>Cancel</CancelButton>
          :
          <EditIcon></EditIcon>
        }
      </EditDescription>
      <ProfileHeader>Our technology...</ProfileHeader>
      <TechnologyRibbons>
        {supplier && loopGreenTech(greenTechObj)}
      </TechnologyRibbons>
      <TechChoiceGrid>
        {isEditing ?
          <EnergySourceGrid>
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