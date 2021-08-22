import React from 'react';
import { supplierTypes } from '../../../types';
import { SupplierCardGrid, SupplierContainerImg, SupplierImg, SupplierInfoInterior } from '../profile-styled-components/profile.style';

type Props = {
  supplier: supplierTypes
}

export const SupplierCard: React.FunctionComponent<Props> = ({ supplier }: Props) => {

  return (
    <SupplierCardGrid>
      <SupplierContainerImg>
        <SupplierImg src={supplier.sup_picture}></SupplierImg>
      </SupplierContainerImg>
      <SupplierInfoInterior>
        <h4>{supplier.sup_name}</h4>
        <h4>{supplier.sup_address}</h4>
        <h4>Eco Score: {supplier.sup_eco_score}</h4>
      </SupplierInfoInterior>
    </SupplierCardGrid>
  )
}