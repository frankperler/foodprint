import { TopCardStyles } from './top-card-styles';
import { SupplStarRating } from '../results/suppliers-star-rating';
import { TopCardContainer } from './top-card-container';
import { supplierTypes } from '../../../types/supplier-types';
import { Link } from "react-router-dom";

interface Props {
  supplier: supplierTypes
}

export const SupplTopCard: React.FunctionComponent<Props> = ({ supplier }: Props) => {

  return (
    <TopCardContainer>
      <TopCardStyles backgroundImg={supplier.sup_picture} />
      <Link to={`/supplier/${supplier.sup_id}`} style={{ textDecoration: 'none' }} >
        <div className="name">{supplier.sup_name}</div>
        <div className="foodtype">{supplier.sup_food_type[0]}</div>
        <SupplStarRating supplier={supplier} />
      </Link>
    </TopCardContainer>
  )
}