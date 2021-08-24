import { TopCardStyles } from './top-choices-styled-components/top-card-styles';
import { TopCardContainer } from './top-choices-styled-components/top-card-container';
import { SupplierEcoRating } from '../results/suppliers-eco-rating';
import { supplierTypes } from '../../../types/supplier-types';
import { Link } from "react-router-dom";

interface Props {
  supplier: supplierTypes
}

export const SupplTopCard: React.FunctionComponent<Props> = ({ supplier }: Props) => {

  return (
    <TopCardContainer>
      <TopCardStyles backgroundImg={supplier.sup_picture} />
      <Link to={`/supplier/${supplier.id}`} style={{ textDecoration: 'none' }} >
        <div className="name">{supplier.sup_name}</div>
        <div className="foodtype">{supplier.Productions.length && supplier.Productions[0].Product.product_type}</div>
        <SupplierEcoRating supplier={supplier} />
      </Link>
    </TopCardContainer>
  )
}