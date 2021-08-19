import { useContext } from 'react';
import { supplierContext } from '../../../contexts/suppliers-contexts';
import { supplierTypes } from '../../../types/supplier-types';
import { ListContainer } from '../results/results-list-container';
import { SupplTopCard } from './suppliers-top-cards';
import { TopTitle } from './top-title';

export const SupplTopList: React.FunctionComponent = () => {

  const { stateSupplier } = useContext(supplierContext)

  return (
    <>
      {stateSupplier.length > 0 &&
        <div>
          <TopTitle>
            <b>Top Suppliers</b>
          </TopTitle>
          <ListContainer>
            {stateSupplier.sort((a, b) => (b.sup_eco_score) - (a.sup_eco_score)).map((supplier: supplierTypes) => {
              return < SupplTopCard supplier={supplier} key={supplier.sup_id} />
            }
            )}
          </ListContainer>
        </div>
      }
    </>
  )
}