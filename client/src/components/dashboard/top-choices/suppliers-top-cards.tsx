import { TopCardStyles } from './top-card-styles';
import { SupplStarRating } from '../results/suppliers-star-rating';
import { TopCardContainer } from './top-card-container';
import { supplierTypes } from '../../../types/supplier-types';

interface Props {
  supplier: supplierTypes
}

export const SupplTopCard: React.FunctionComponent<Props> = ({ supplier }: Props) => {

  return (
    <TopCardContainer>
      <TopCardStyles backgroundImg={supplier.sup_picture} />
      <div className="name">{supplier.sup_name}</div>
      <div className="foodtype">{supplier.sup_food_type[0]}</div>
      <SupplStarRating supplier={supplier} />
    </TopCardContainer>
  )
}