import { useContext, useState } from 'react';
import { supplierContext } from '../../../contexts/suppliers-contexts';
import { userContext } from '../../../contexts/user-context';
import { supplierTypes } from '../../../types/supplier-types';
import { SupplierCard } from './suppliers-card';
import { ListContainer } from './results-styled-components/results-list-container';
import { ListTitle } from './results-styled-components/results-title';
import { ListWrapper } from './results-styled-components/results-list-wrapper';
import { getDistance } from 'geolib';

export const SuppliersLists: React.FunctionComponent = () => {

  const { stateSupplier } = useContext(supplierContext)
  const { stateUser } = useContext(userContext)
  const [supplTypesArray] = useState(['Fruits', 'Vegetables', 'Dairy'])
  // console.log("stateSupplier", stateSupplier)

  
  function supplierLoop(value: string, suppliers: supplierTypes[]): any {
    return suppliers.map((supplier) => {
      //calculate distance
      const distanceInMeters = getDistance(
        { latitude: stateUser.restaurants![0].rest_lat, longitude: stateUser.restaurants![0].rest_lng },
        { latitude: supplier.sup_lat, longitude: supplier.sup_lng}
      );
  
      if (supplier.Productions.length) {
        return supplier.Productions.map((production) => {
          let count = 0;
          if (production.Product.product_type === value && count < 1) {
            count++
            console.log("checking sup name inside loop ---", supplier.sup_name);
            return <SupplierCard supplier={supplier} distance={distanceInMeters} key={Math.random() * +supplier.id} product={production.Product.product_name} />
          }
        })
      }
    }).slice(0, 6)
  }

  return (
    <>
    {stateUser.user.user_type =="restaurant" && stateUser.restaurants && stateUser.restaurants[0].Suppliers
      && stateUser.restaurants[0].Suppliers.length?
      <ListWrapper key={"myList"}>
      <ListTitle>
        My Suppliers
      </ListTitle>
      <ListContainer>
        {
          stateUser.restaurants[0].Suppliers.map((supplier: supplierTypes) => 
             < SupplierCard supplier={supplier} key={supplier.id}  product={supplier.Productions[0].Product.product_name}/>
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