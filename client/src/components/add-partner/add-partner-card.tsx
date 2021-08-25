import { useContext } from 'react';
import { userContext } from '../../contexts/user-context';
import { supplierTypes } from '../../types';
import { AddCardContainer } from './add-partner-styled-components/add-functionality-styles';
import { restaurantTypes } from '../../types';
import { restaurantCheck } from '../../types/restaurant-types'
import { HomePageButton } from '../navbar/navbar-styled-components/homepagebutton';
import { claimSupplier } from '../../services/RestaurantService'
import { claimRestaurant } from '../../services/SupplierService'
import { useHistory, Link } from 'react-router-dom';

interface Props {
  result: supplierTypes | restaurantTypes
}

export const PartnerCard: React.FunctionComponent<Props> = ({ result }: Props) => {
  const history = useHistory()
  const { stateUser, dispatchUser } = useContext(userContext);

  const handleClickSupplier = async (sup_name: string, id: number) => {
    try {
      await claimSupplier(sup_name, id, stateUser.token)
        .then((result) => dispatchUser({ type: 'CLAIM-SUPPLIER', payload: result }))
        .then(() => { history.push('/thankyou') })
    } catch (error) {
      console.log(error)
    }
  }

  const handleClickRestaurant = async (rest_name: string, id: number) => {
    try {
      await claimRestaurant(rest_name, id, stateUser.token)
        .then((result) => dispatchUser({ type: 'CLAIM-RESTAURANT', payload: result }))
        .then(() => { history.push('/thankyou') })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {restaurantCheck(result) ?
        <AddCardContainer>
          <Link to={`/restaurant/${result.id}`} style={{ textDecoration: 'none', width: '100%' }}  >
            <img className="img" src={result.rest_picture} />
            <div className="name">{result.rest_name}</div>
            <div className="foodtype">
              {result.rest_types.length && result.rest_types[0]}
            </div>
          </Link>
          <HomePageButton onClick={() => handleClickRestaurant(result.rest_name, stateUser.suppliers![0].id)} className='addBtn' style={{ backgroundColor: "#84DCC6" }}>Add</HomePageButton>
        </AddCardContainer >
        :
        <AddCardContainer>
          <Link to={`/supplier/${result.id}`} style={{ textDecoration: 'none', width: '100%' }} >
            <img className="img" src={result.sup_picture} />
            <div className="name">{result.sup_name}</div>
            <div className="foodtype">
              {result.Productions.length ? result.Productions[0].Product.product_type : 'Production not displayed'}
            </div>
          </Link>
          <HomePageButton onClick={() => handleClickSupplier(result.sup_name, stateUser.restaurants![0].id)} className='addBtn'>Add</HomePageButton>
        </AddCardContainer>
      }
    </>
  )
}