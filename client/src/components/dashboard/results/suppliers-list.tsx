import { useContext, useState } from 'react';
import { supplierContext } from '../../../contexts/suppliers-contexts';
import { supplierTypes } from '../../../types/supplier-types';
import { SupplierCard } from './suppliers-card';
import { ListContainer } from './results-styled-components/results-list-container';
import { ListTitle } from './results-styled-components/results-title';
import { ListWrapper } from './results-styled-components/results-list-wrapper';

export const SuppliersLists: React.FunctionComponent = () => {

  const { stateSupplier } = useContext(supplierContext)
  const [supplTypesArray] = useState(['Fruits', 'Vegetables', 'Dairy'])

  function supplierLoop(value: string, suppliers: supplierTypes[]): any {
    // let count = 0;
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
      {stateSupplier.length > 0 &&
        supplTypesArray.map((value: string) => {
          console.log('-------', value)
          return (
            <ListWrapper key={value}>
              <ListTitle>
                {value}
              </ListTitle>
              <ListContainer>
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