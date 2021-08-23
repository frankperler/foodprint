import { useContext, useState } from 'react';
import { supplierContext } from '../../../contexts/suppliers-contexts';
import { supplierTypes } from '../../../types/supplier-types';
import { SupplierCard } from './suppliers-card';
import { ListContainer } from './results-styled-components/results-list-container';
import { ListTitle } from './results-styled-components/results-title';
import { ListWrapper } from './results-styled-components/results-list-wrapper';

export const SuppliersLists: React.FunctionComponent = () => {

  const { stateSupplier } = useContext(supplierContext)
  const [supplTypesArray] = useState(['Vegetables', 'Fruits', 'Dairy'])


  return (
    <>
      {stateSupplier.length > 0 &&
        supplTypesArray.map((value: string) => {
          let count = 0;
          return (
            <ListWrapper>
              <ListTitle>
                {value}
              </ListTitle>
              <ListContainer>
                {stateSupplier.map((supplier: supplierTypes) => {
                  if (supplier.Productions.length && (supplier.Productions[0].Product.product_name.includes(value) && count < 6)) {
                    count++
                    return < SupplierCard supplier={supplier} key={supplier.id} />
                  }
                }
                )}
              </ListContainer>
            </ListWrapper>
          )
        }
        )}
    </>
  )
}

// 