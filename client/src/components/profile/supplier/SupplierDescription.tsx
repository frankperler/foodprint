import React from 'react';
import { DescriptionCard, DescriptionText, EditDescription } from '../profile-styled-components/profile.style';
import { Icon } from 'semantic-ui-react';
import { suppliers } from '../../../mock';

export const SupplierDescription = (): JSX.Element => {


  return (
    <DescriptionCard>
      <EditDescription>
        <Icon name='edit' size="large" />
      </EditDescription>
      <h2>Description</h2>
      <DescriptionText>
      {suppliers[2].sup_description}
      </DescriptionText>
    </DescriptionCard>
  )
}