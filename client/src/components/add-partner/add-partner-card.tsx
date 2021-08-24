import { supplierTypes } from '../../types';
import { Link } from "react-router-dom";
import { PinCardContainer } from '../dashboard/map/pin-card-container';
import { restaurantTypes } from '../../types';
import { restaurantCheck } from '../../types/restaurant-types'

interface Props {
  result: supplierTypes | restaurantTypes
}

export const PartnerCard: React.FunctionComponent<Props> = ({ result }: Props) => {

  console.log(result)
  return (
    <PinCardContainer>
      {restaurantCheck(result) ?
        <Link to={`/restaurant/${result.id}`} style={{ textDecoration: 'none' }} >
          <div className="name">{result.rest_name}</div>
          <div className="foodtype">
            {result.rest_types[0] && result.rest_types[0]}
          </div>
        </Link>
        :
        <Link to={`/supplier/${result.id}`} style={{ textDecoration: 'none' }} >
          <div className="name">{result.sup_name}</div>
          <div className="foodtype">
            {result.Productions[0].Product.product_type && result.Productions[0].Product.product_type}
          </div>
        </Link>
      }
    </PinCardContainer >
  )
}