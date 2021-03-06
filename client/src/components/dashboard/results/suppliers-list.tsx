import { useContext, useState } from 'react';
import { supplierContext } from '../../../contexts/suppliers-contexts';
import { userContext } from '../../../contexts/user-context';
import { supplierTypes } from '../../../types/supplier-types';
import { SupplierCard } from './suppliers-card';
import { ListContainer } from './results-styled-components/results-list-container';
import { ListTitle } from './results-styled-components/results-title';
import { ListWrapper } from './results-styled-components/results-list-wrapper';
import { calculateDistance } from '../../../tools/distance'
import { useEffect } from 'react';


export const SuppliersLists: React.FunctionComponent = () => {

  const { stateSupplier } = useContext(supplierContext)
  const [supplTypesArray] = useState(['Fruits', 'Vegetables', 'Dairy'])

  const { stateUser } = useContext(userContext)
  const [userLat, setUserLat] = useState<number>(0)
  const [userLon, setUserLon] = useState<number>(0)

  useEffect(() => {
    setUserLat(stateUser.restaurants![0].rest_lat)
    setUserLon(stateUser.restaurants![0].rest_lng)
  }, [])

  function supplierLoop(value: string, suppliers: supplierTypes[]): any {

    return suppliers.map((supplier) => {
      if (supplier.Productions.length) {
        return supplier.Productions.map((production) => {
          let count = 0;
          if (production.Product.product_type === value && count < 1) {
            count++
            return <SupplierCard
              supplier={supplier}
              distance={calculateDistance(supplier, userLat, userLon)}
              key={Math.random() * +supplier.id}
              product={production.Product.product_name} />
          }
        })
      }
    }).slice(0, 6)
  }

  return (
    <>
      {stateUser.user.user_type == "restaurant" && stateUser.restaurants && stateUser.restaurants[0].Suppliers && stateUser.restaurants[0].Suppliers.length ?
        <ListWrapper key={"myList"} flexDir="column">
          <ListTitle>
            My Suppliers
          </ListTitle>
          <ListContainer>
            {
              stateUser.restaurants[0].Suppliers.map((supplier: supplierTypes) => {
                return < SupplierCard
                  supplier={supplier}
                  distance={calculateDistance(supplier, userLat, userLon)}
                  key={supplier.id}
                  product={supplier.Productions ? supplier.Productions[0].Product.product_type : "Production not displayed"}
                />
              }
              )}
          </ListContainer>
        </ListWrapper>
        : <div></div>}
      {
        stateSupplier.length > 0 &&
        supplTypesArray.map((value: string) => {
          return (
            <ListWrapper key={value} flexDir="column">
              <ListTitle>
                {value}
              </ListTitle>
              <ListContainer>
                {supplierLoop(value, stateSupplier)}
              </ListContainer>
            </ListWrapper>
          )
        }
        )
      }
    </>
  )
}
