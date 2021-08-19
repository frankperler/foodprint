import { ResultsCardStyles } from './results-styled-components/results-card-styles';
import { SupplStarRating } from './suppliers-star-rating'
import { CardContainer } from './results-styled-components/results-card-container';
import { supplierTypes } from '../../../types/supplier-types';
import { Link } from "react-router-dom";

interface Props {
  supplier: supplierTypes
}

export const SupplierCard: React.FunctionComponent<Props> = ({ supplier }: Props) => {

  return (
    <CardContainer>
      <ResultsCardStyles backgroundImg={supplier.sup_picture} />
      <Link to={`/supplier/${supplier.sup_id}`} style={{ textDecoration: 'none' }} >
        <div className="name">{supplier.sup_name}</div>
        <div className="foodtype">{supplier.sup_food_type[0]}</div>
        <SupplStarRating supplier={supplier} />
      </Link>
    </CardContainer>
  )
}