import { ResultsCardStyles } from './results-styled-components/results-card-styles';
import { SupplStarRating } from './suppliers-star-rating'
import { CardContainer } from './results-styled-components/results-card-container';
import { supplierTypes } from '../../../types/supplier-types';
import { Link } from "react-router-dom";

interface Props {
  supplier: supplierTypes
  product?: string
  distance?: number
}

export const SupplierCard: React.FunctionComponent<Props> = ({ ...Props }: Props) => {

  return (
    <CardContainer>
      <ResultsCardStyles backgroundImg={Props.supplier.sup_picture} />
      <Link to={`/supplier/${Props.supplier.id}`} style={{ textDecoration: 'none' }} >
        <div className="name">{Props.supplier.sup_name}</div>
        <SupplStarRating supplier={Props.supplier} />
        <div className="bottom-card-section">
          <div className="foodtype">{Props.product}</div>
          <div className="distance">{`${Math.round((Props.distance)!/1000)} km away`}</div>
        </div>
      </Link>
    </CardContainer>
  )
}