import { supplierTypes } from '../../types';
import { restaurantTypes } from '../../types';
import { PartnerCard } from './add-partner-card'

interface Props {
  searchResults: supplierTypes[] | restaurantTypes[]
}

export const PartnerList: React.FunctionComponent<Props> = ({ searchResults }: Props) => {

  return (
    <>
      {searchResults &&
        searchResults.map((result) => {
          return <PartnerCard result={result} key={result.id} />
        })
      }
    </>
  )
}