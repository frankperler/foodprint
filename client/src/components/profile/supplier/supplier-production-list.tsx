import React from 'react';
import { supplierTypes } from '../../../types';
import { ProductsContainer, ProfileHeader } from '../profile-styled-components/profile.style';

interface Props {
  supplier: supplierTypes
}

export const ProductsList: React.FunctionComponent<Props> = ({ supplier }: Props) => {

  return (
    <ProductsContainer>
      <ProfileHeader>Our main products</ProfileHeader>
      <table style={{ width: "100%" }}>
        <tr>
          <th>Product</th>
          <th>Production</th>
          <th>CO2e</th>
        </tr>
        {supplier.Productions.map((production) => {
          <tr>
            <td>{production.Product.product_name}</td>
            <td>{production.production_amount}</td>
            <td>{production.Product.product_CO2}</td>
          </tr>
        })}
      </table>

    </ProductsContainer>
  )
}