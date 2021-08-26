import { ResultsCardStyles } from './results-styled-components/results-card-styles';
import { SupplierEcoRating } from './suppliers-eco-rating';
import { CardContainer } from './results-styled-components/results-card-container';
import { supplierTypes } from '../../../types/supplier-types';
import { Link } from "react-router-dom";

interface Props {
  supplier: supplierTypes
  product?: string
  distance?: number
}

export const SupplierCard: React.FunctionComponent<Props> = ({ supplier, product, distance }: Props) => {

  return (
    <CardContainer>
      <ResultsCardStyles backgroundImg={supplier.sup_picture} />
      <Link to={`/supplier/${supplier.id}`} style={{ textDecoration: 'none', width: '100%' }} >
        <div className="name">{supplier.sup_name}</div>
        <SupplierEcoRating supplier={supplier} />
        <div className="bottom-card-section">
          <div className="foodtype">{product}</div>
          {distance && <div className="distance">{`${Math.round((distance)! / 1000)} km away`}</div>}
        </div>
      </Link>
    </CardContainer>
  )
}