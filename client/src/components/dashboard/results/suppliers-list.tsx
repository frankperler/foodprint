import { useContext, useState } from 'react';
import { supplierContext } from '../../../contexts/suppliers-contexts';
import { userContext } from '../../../contexts/user-context';
import { supplierTypes } from '../../../types/supplier-types';
import { SupplierCard } from './suppliers-card';
import { ListContainer } from './results-styled-components/results-list-container';
import { ListTitle } from './results-styled-components/results-title';
import { ListWrapper } from './results-styled-components/results-list-wrapper';

export const SuppliersLists: React.FunctionComponent = () => {

  const { stateSupplier } = useContext(supplierContext)
  const { stateUser } = useContext(userContext)
  const [supplTypesArray] = useState(['Fruits', 'Vegetables', 'Dairy'])

  function supplierLoop(value: string, suppliers: supplierTypes[]): any {
    return suppliers.map((supplier) => {
      if (supplier.Productions.length) {
        return supplier.Productions.map((production) => {
          let count = 0;
          if (production.Product.product_type === value && count < 1) {
            count++
            return <SupplierCard supplier={supplier} key={Math.random() * +supplier.id} value={value} />
          }
        })
      }
    }).slice(0, 6)
  }

  return (
    <>
      {stateUser.user.user_type == "restaurant" && stateUser.restaurants && stateUser.restaurants[0].Suppliers
        && stateUser.restaurants[0].Suppliers.length ?
        <ListWrapper key={"myList"}>
          <ListTitle>
            My Suppliers
          </ListTitle>
          <ListContainer>
            {
              stateUser.restaurants[0].Suppliers.map((supplier: supplierTypes) =>
                < SupplierCard supplier={supplier} key={supplier.id} />
              )}
          </ListContainer>
        </ListWrapper>
        : null}
      {stateSupplier.length > 0 &&
        supplTypesArray.map((value: string) => {
          return (
            <ListWrapper key={value}>
              <ListTitle>
                {value}
              </ListTitle>
              <ListContainer>
                {stateSupplier[0].sup_name}
                {supplierLoop(value, stateSupplier)}
              </ListContainer>
            </ListWrapper>
          )
        }
        )}
    </>
  )
}

// 