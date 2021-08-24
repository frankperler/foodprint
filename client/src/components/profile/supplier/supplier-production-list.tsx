import React from 'react';
import { supplierTypes } from '../../../types';
import { ProductsContainer, ProfileHeader, TableHeader } from '../profile-styled-components/profile.style';

interface Props {
  supplier: supplierTypes
}

export const ProductsList: React.FunctionComponent<Props> = ({ supplier }: Props) => {

  return (
    <ProductsContainer>
      <ProfileHeader>Our main products</ProfileHeader>
      <table style={{ width: "80%", marginLeft: "9rem" }}>
        <tr style={{ fontSize: "large", marginLeft: "3rem" }}>
          <TableHeader>Product <br />(type)</TableHeader>
          <TableHeader>Production <br />(tonnes)</TableHeader>
          <TableHeader>gCO2e <br />(per 100g of product)</TableHeader>
          <TableHeader>Production <br />(tonnes of CO2e)</TableHeader>
        </tr>
        {supplier.Productions.map((production) => {
          return (
            <tr>
              <td align="left">{production.Product.product_name}</td>
              <td align="left">{production.production_amount}</td>
              <td align="left">{production.Product.product_CO2}</td>
              <td align="left">{production.production_CO2 / 1000}</td>
            </tr>
          )
        })}
      </table>
    </ProductsContainer >
  )
}