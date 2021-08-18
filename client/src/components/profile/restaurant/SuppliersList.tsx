import React from 'react';
import { AddSupplier, ButtonWrap, InteriorSupplierContainer, SupplierContainer, SupplierListContainer } from '../profile-styled-components/profile.style';
import { suppliers } from '../../../mock';
import { SupplierCard } from './SupplierCard';
import { Icon } from 'semantic-ui-react';

export const SuppliersList = (): JSX.Element => {



  return (
    <SupplierContainer>
      <InteriorSupplierContainer>
        <ButtonWrap>
          <AddSupplier>
            <Icon name="plus" size="big" /> Add supplier
          </AddSupplier>
        </ButtonWrap>
        <h2>Who we get our food from...</h2>
        <SupplierListContainer>
          {suppliers.map(supplier => {
            return <SupplierCard key={supplier.sup_id} supplier={supplier}/>
          })}
        </SupplierListContainer>
      </InteriorSupplierContainer>
    </SupplierContainer>
  )
}