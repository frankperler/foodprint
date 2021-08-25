import React from 'react';
import { useState } from 'react';
import { CancelButton, DescriptionCard, ProfileHeader, DescriptionText, EditDescription, EditTextArea, UpdateChangesButton } from '../profile-styled-components/profile.style';

import EditIcon from '@material-ui/icons/Edit';
import { supplierTypes } from '../../../types';

interface Props {
  supplier: supplierTypes,
  isOwner: boolean
}

export const SupplierDescription: React.FunctionComponent<Props> = ({ supplier, isOwner }: Props) => {

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
          <EditTextArea onChange={handleInputChange}>{supplier.sup_description}</EditTextArea>
          <UpdateChangesButton type="submit">Update changes</UpdateChangesButton>
        </form> : supplier.sup_description}
      </DescriptionText>
    </DescriptionCard>
  )
}