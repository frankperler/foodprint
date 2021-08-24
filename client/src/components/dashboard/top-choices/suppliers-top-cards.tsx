import { TopCardStyles } from './top-choices-styled-components/top-card-styles';
import { SupplStarRating } from '../results/suppliers-star-rating';
import { TopCardContainer } from './top-choices-styled-components/top-card-container';
import { supplierTypes } from '../../../types/supplier-types';
import { Link } from "react-router-dom";

interface Props {
  supplier: supplierTypes,
  distance: number
}

export const SupplTopCard: React.FunctionComponent<Props> = ({ supplier, distance }: Props) => {

  return (
    <TopCardContainer>
      <Link to={`/supplier/${supplier.id}`} style={{ textDecoration: 'none', width: '100%' }} />
      <TopCardStyles backgroundImg={supplier.sup_picture} />
      <Link to={`/supplier/${supplier.id}`} style={{ textDecoration: 'none', width: '100%'}} >
        <div className="name">{supplier.sup_name}</div>
        <SupplStarRating supplier={supplier} />
        <div className="bottom-card-section">
          <div className="foodtype">{supplier.Productions.length && supplier.Productions[0].Product.product_name}</div>
          <div className="distance">{`${Math.round((distance)!/1000)} km away`}</div>
        </div>
      </Link>
      </TopCardContainer>
  )
}