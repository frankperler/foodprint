import React from 'react';
import { DescriptionCard, ProfileHeader, DescriptionText, EditDescription, EditTextArea, CancelButton, UpdateChangesButton } from '../profile-styled-components/profile.style';
import { useState } from 'react';
import { MouseEvent } from 'react';
import { restaurantTypes } from '../../../types';
import EditIcon from '@material-ui/icons/Edit';

interface Props {
  restaurant: restaurantTypes;
  isOwner: boolean;
}

export const RestaurantDescription: React.FunctionComponent<Props> = ({ restaurant, isOwner }: Props) => {

  const [isEditing, setIsEditing] = useState(false)
  const [descriptionValue, setDescriptionValue] = useState<string>()

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionValue(e.target.value);
  }

  const handleUpdate = (e: MouseEvent) => {
    e.preventDefault();
    setDescriptionValue(descriptionValue);
  }

  return (
    <DescriptionCard>

      {!isOwner ? <div></div> :
        <EditDescription onClick={() => !isEditing ? setIsEditing(true) : setIsEditing(false)}>
          {isEditing ?
            <CancelButton>Cancel</CancelButton>
            :
            <EditIcon></EditIcon>
          }
        </EditDescription>
      }
      <ProfileHeader>About us</ProfileHeader>
      <DescriptionText>
        {isEditing ? <form onSubmit={() => handleUpdate}>
          <EditTextArea onChange={handleInputChange}>{restaurant.rest_description}</EditTextArea>
          <UpdateChangesButton>Update changes</UpdateChangesButton>
        </form> : restaurant.rest_description}
      </DescriptionText>
    </DescriptionCard>
  )
}