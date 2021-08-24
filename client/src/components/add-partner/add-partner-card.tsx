import { supplierTypes } from '../../types';
import { Link } from "react-router-dom";
import { PinCardContainer } from '../dashboard/map/pin-card-container';
import { restaurantTypes } from '../../types';
import { restaurantCheck } from '../../types/restaurant-types'
import { HomePageButton } from '../navbar/navbar-styled-components/homepagebutton';

interface Props {
  result: supplierTypes | restaurantTypes
}

export const PartnerCard: React.FunctionComponent<Props> = ({ result }: Props) => {

  return (
    <PinCardContainer>
      {restaurantCheck(result) ?
        <Link to={`/restaurant/${result.id}`} style={{ textDecoration: 'none' }} >
          <div className="name">{result.rest_name}</div>
          <div className="foodtype">
            {result.rest_types.length && result.rest_types[0]}
          </div>
          <HomePageButton>Add</HomePageButton>
        </Link>
        :
        <Link to={`/supplier/${result.id}`} style={{ textDecoration: 'none' }} >
          <div className="name">{result.sup_name}</div>
          <div className="foodtype">
            {result.Productions.length && result.Productions[0].Product.product_type}
          </div>
          <HomePageButton>Add</HomePageButton>
        </Link>
      }
    </PinCardContainer >
  )
}