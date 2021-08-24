import { useContext } from 'react';
import { supplierContext } from '../../../contexts/suppliers-contexts';
import { userContext } from '../../../contexts/user-context';
import { supplierTypes } from '../../../types/supplier-types';
import { ListContainer } from '../results/results-styled-components/results-list-container';
import { SupplTopCard } from './suppliers-top-cards';
import { TopTitle } from './top-choices-styled-components/top-title';
import { calculateDistance } from '../../../services/distance';


export const SupplTopList: React.FunctionComponent = () => {

  const { stateSupplier } = useContext(supplierContext)
  const { stateUser } = useContext(userContext)

  const userLat = stateUser.restaurants![0].rest_lat;
  const userLon = stateUser.restaurants![0].rest_lng

  return (
    <>
      {stateSupplier.length > 0 &&
        <div>
          <TopTitle>
            <b>Top Suppliers</b>
          </TopTitle>
          <ListContainer>
            {stateSupplier.sort((a, b) => (b.sup_eco_score) - (a.sup_eco_score)).slice(0, 3).map((supplier: supplierTypes) => (
              < SupplTopCard 
                      supplier={supplier} 
                      distance={calculateDistance(supplier, userLat, userLon)}
                      key={supplier.id} />
            )
            )}
          </ListContainer>
        </div>
      }
    </>
  )
}