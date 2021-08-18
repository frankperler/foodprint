import React from 'react';
import { DescriptionCard, DescriptionText, EditDescription } from '../profile-styled-components/profile.style';
import { restos } from '../../../mock';
import { Icon } from 'semantic-ui-react';

export const RestaurantDescription = (): JSX.Element => {


  return (
    <DescriptionCard>
      <EditDescription>
        <Icon name='edit' size="large" />
      </EditDescription>
      <h2>Description</h2>
      <DescriptionText>
      {restos[2].rest_description}
      </DescriptionText>
    </DescriptionCard>
  )
}