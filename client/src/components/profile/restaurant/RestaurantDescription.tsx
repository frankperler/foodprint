import React from 'react';
import { DescriptionCard, DescriptionText, EditDescription, EditTextArea, CancelButton, UpdateChangesButton } from '../profile-styled-components/profile.style';
import { restos } from '../../../mock';
import { Icon } from 'semantic-ui-react';
import { useState } from 'react';
import { MouseEvent } from 'react';

export const RestaurantDescription = (): JSX.Element => {

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
        { isEditing ? 
        <CancelButton>Cancel</CancelButton>
        :
        <Icon name='edit' size="large"/>
        }
      </EditDescription>
      <h2>Description</h2>
      <DescriptionText>
        {isEditing ? <form onSubmit={() => handleUpdate}>
          <EditTextArea onChange={handleInputChange}>{restos[2].rest_description}</EditTextArea>
          <UpdateChangesButton>Update changes</UpdateChangesButton>
        </form> : restos[2].rest_description}
      </DescriptionText>
    </DescriptionCard>
  )
}