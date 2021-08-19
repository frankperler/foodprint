import React from 'react';
import { useState } from 'react';
import { DescriptionCard, DescriptionText, EditDescription, EditTextArea, UpdateChangesButton } from '../profile-styled-components/profile.style';
import { Icon } from 'semantic-ui-react';
import { suppliers } from '../../../mock';

export const SupplierDescription = (): JSX.Element => {

  const [ isEditing, setIsEditing ] = useState(false)
  const [ descriptionValue, setDescriptionValue ] = useState<string>()

const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionValue(e.target.value);
}

const handleUpdate = (e: MouseEvent ) => {
  e.preventDefault();
  setDescriptionValue(descriptionValue);
}



  return (
    <DescriptionCard>
      <EditDescription onClick={() => !isEditing ? setIsEditing(true) : setIsEditing(false)}>
        <Icon name='edit' size="large"/>
      </EditDescription>
      <h2>Description</h2>
      <DescriptionText>
        {isEditing ? <form onSubmit={() => handleUpdate}>
          <EditTextArea onChange={handleInputChange}>{suppliers[2].sup_description}</EditTextArea>
          <UpdateChangesButton type="submit">Update changes</UpdateChangesButton>
        </form> : suppliers[2].sup_description}
      </DescriptionText>
    </DescriptionCard>
  )
}