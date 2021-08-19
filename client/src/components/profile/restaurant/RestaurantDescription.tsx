import React from 'react';
import { DescriptionCard, DescriptionText, EditDescription, EditTextArea } from '../profile-styled-components/profile.style';
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
        <Icon name='edit' size="large"/>
      </EditDescription>
      <h2>Description</h2>
      <DescriptionText>
        {isEditing ? <form onSubmit={() => handleUpdate}>
          <EditTextArea onChange={handleInputChange}>{restos[2].rest_description}</EditTextArea>
          <button type="submit">Update changes</button>
        </form> : restos[2].rest_description}
      </DescriptionText>
    </DescriptionCard>
  )
}