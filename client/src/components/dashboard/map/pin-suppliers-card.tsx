import { supplierTypes } from '../../../types';
import { Link } from "react-router-dom";
import { PinCardContainer } from './pin-card-container'
import { SupplierEcoRating } from '../results/suppliers-eco-rating';

interface Props {
  supplier: supplierTypes
}

export const PinSupplierCard: React.FunctionComponent<Props> = ({ supplier }: Props) => {

  return (
    <PinCardContainer>
      <Link to={`/supplier/${supplier.id}`} style={{ textDecoration: 'none' }} >
        <div className="name">{supplier.sup_name}</div>
        <div className="foodtype">
          {supplier.Productions[0].Product.product_type && supplier.Productions[0].Product.product_type}
        </div>
        <SupplierEcoRating supplier={supplier} />
      </Link>
    </PinCardContainer >
  )
}