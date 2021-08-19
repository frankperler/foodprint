import { ResultsCardStyles } from './results-card-styles';
import { SupplStarRating } from './suppliers-star-rating'
import { CardContainer } from './results-card-container';
import { supplierTypes } from '../../../types/supplier-types';

interface Props {
  supplier: supplierTypes
}

export const SupplierCard: React.FunctionComponent<Props> = ({ supplier }: Props) => {

  return (
    <CardContainer>
      <ResultsCardStyles backgroundImg={supplier.sup_picture} />
      <div className="name">{supplier.sup_name}</div>
      <div className="foodtype">{supplier.sup_food_type[0]}</div>
      <SupplStarRating supplier={supplier} />
    </CardContainer>
  )
}