import { supplierTypes } from '../../types';
import { Link } from "react-router-dom";
import { AddCardContainer } from './add-partner-styled-components/add-functionality-styles';
import { restaurantTypes } from '../../types';
import { restaurantCheck } from '../../types/restaurant-types'
import { HomePageButton } from '../navbar/navbar-styled-components/homepagebutton';

interface Props {
  result: supplierTypes | restaurantTypes
}

export const PartnerCard: React.FunctionComponent<Props> = ({ result }: Props) => {

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
          <HomePageButton className='addBtn'>Add</HomePageButton>
        </AddCardContainer >
        :
        <AddCardContainer>
          <Link to={`/supplier/${result.id}`} style={{ textDecoration: 'none', width: '100%' }} >
            <img className="img" src={result.sup_picture} />
            <div className="name">{result.sup_name}</div>
            <div className="foodtype">
              {result.Productions.length && result.Productions[0].Product.product_type}
            </div>
          </Link>
          <HomePageButton className='addBtn'>Add</HomePageButton>
        </AddCardContainer>
      }
    </>
  )
}