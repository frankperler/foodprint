import React from 'react';
import { supplierTypes } from '../../../types';
import { ProductsContainer, ProfileHeader, TableHeader, Table, TableRow, TableData } from '../profile-styled-components/profile.style';

interface Props {
  supplier: supplierTypes;
}

export const ProductsList: React.FunctionComponent<Props> = ({ supplier }: Props) => {

  return (
    <ProductsContainer>
      <ProfileHeader>Our main products</ProfileHeader>
      <Table>
        <TableRow>
          <TableHeader textAlign="center">Product</TableHeader>
          <TableHeader>Production (tonnes)</TableHeader>
          <TableHeader>gCO2e (per 100g of product)</TableHeader>
          <TableHeader>Production (tonnes of CO2e)</TableHeader>
        </TableRow>
        {supplier.Productions.map((production) => {
          return (
            <TableRow>
              <TableData textAlign="center" textColor="black" fontWeight="bold">{production.Product.product_name}</TableData>
              <TableData >{production.production_amount}</TableData>
              <TableData>{production.Product.product_CO2}</TableData>
              <TableData>{production.production_CO2 / 1000}</TableData>
            </TableRow>
          )
        })}
      </Table>
    </ProductsContainer >
  )
}

