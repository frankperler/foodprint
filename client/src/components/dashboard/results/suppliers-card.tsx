import { ResultsCardStyles } from './results-styled-components/results-card-styles';
import { SupplierEcoRating } from './suppliers-eco-rating';
import { CardContainer } from './results-styled-components/results-card-container';
import { supplierTypes } from '../../../types/supplier-types';
import { Link } from "react-router-dom";

interface Props {
  supplier: supplierTypes
  value?: string
}

export const SupplierCard: React.FunctionComponent<Props> = ({ supplier, value }: Props) => {

  return (
    <CardContainer>
      <ResultsCardStyles backgroundImg={supplier.sup_picture} />
      <Link to={`/supplier/${supplier.id}`} style={{ textDecoration: 'none' }} >
        <div className="name">{supplier.sup_name}</div>
        <div className="foodtype">{value}</div>
        <SupplierEcoRating supplier={supplier} />
      </Link>
    </CardContainer>
  )
}