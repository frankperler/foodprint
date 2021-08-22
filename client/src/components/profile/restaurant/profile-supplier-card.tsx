import React from 'react';
import { supplierTypes } from '../../../types';
import { ProfileName, SupplierCardGrid, SupplierImg, SupplierInfoInterior } from '../profile-styled-components/profile.style';
import { SupplStarRating } from '../../dashboard/results/suppliers-star-rating'
import { Link } from "react-router-dom";

type Props = {
  supplier: supplierTypes
}

export const SupplierCard: React.FunctionComponent<Props> = ({ supplier }: Props) => {

  return (
    <Link to={`/supplier/${supplier.id}`} style={{ textDecoration: 'none' }} >
      <SupplierCardGrid>
        <SupplierImg src={supplier.sup_picture}></SupplierImg>
        <SupplierInfoInterior>
          <ProfileName fontColor="#FFA69E">{supplier.sup_name}</ProfileName>
          <h4 style={{ color: 'black' }}>{supplier.sup_address}</h4>
          <SupplStarRating supplier={supplier} />
        </SupplierInfoInterior>
      </SupplierCardGrid>
    </Link>
  )
}