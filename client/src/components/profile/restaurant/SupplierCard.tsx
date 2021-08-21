import React from 'react';
import { SupplierCardGrid, SupplierContainerImg, SupplierImg, SupplierInfo, SupplierInfoInterior } from '../profile-styled-components/profile.style';

type Props = {
  supplier: {
    sup_id: number;
    sup_name: string;
    sup_address: string;
    sup_phone_number: string;
    sup_lat: number;
    sup_lng: number;
    sup_website: string;
    sup_eco_score: number;
    sup_description: string;
    sup_picture: string;
    sup_greenTech: string[];
    sup_energy: string[];
    sup_vehicles: string;
  }
}

export const SupplierCard = ({ supplier }: Props): JSX.Element => {


  return (
    <SupplierCardGrid>
      <SupplierContainerImg>
        <SupplierImg src={supplier.sup_picture}></SupplierImg>
      </SupplierContainerImg>
      <SupplierInfo>
        <SupplierInfoInterior>
          <h4>{supplier.sup_name}</h4>
          <h4>{supplier.sup_address}</h4>
          <h4>Eco Score: {supplier.sup_eco_score}</h4>
        </SupplierInfoInterior>
      </SupplierInfo>
    </SupplierCardGrid>
  )
}