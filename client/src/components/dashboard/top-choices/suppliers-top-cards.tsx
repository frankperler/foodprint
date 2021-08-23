import { TopCardStyles } from './top-choices-styled-components/top-card-styles';
import { SupplStarRating } from '../results/suppliers-star-rating';
import { TopCardContainer } from './top-choices-styled-components/top-card-container';
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
        <div className="foodtype">{supplier.Productions.length && supplier.Productions[0].Product.product_name}</div>
        <SupplStarRating supplier={supplier} />
      </Link>
    </TopCardContainer>
  )
}