import { useContext, useState } from 'react';
import { supplierContext } from '../../../contexts/suppliers-contexts';
import { supplierTypes } from '../../../types/supplier-types';
import { SupplierCard } from './suppliers-card';
import { ListContainer } from './results-styled-components/results-list-container';
import { ListTitle } from './results-styled-components/results-title';


export const SuppliersLists: React.FunctionComponent = () => {

  const { stateSupplier } = useContext(supplierContext)
  const [supplTypesArray] = useState(['Vegetables', 'Fruits', 'Cheese'])

  return (
    <>
      {stateSupplier.length > 0 &&
        supplTypesArray.map((value: string) => {
          return (
            <div>
              <ListTitle>
                {value}
              </ListTitle>
              <ListContainer>
                {stateSupplier.map((supplier: supplierTypes) => {
                  if (supplier.sup_food_type.includes(value)) {
                    return < SupplierCard supplier={supplier} key={supplier.sup_id} />
                  }
                }
                )}
              </ListContainer>
            </div>
          )
        }
        )}
    </>
  )
}

// 