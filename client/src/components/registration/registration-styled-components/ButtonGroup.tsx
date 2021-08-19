import { Dispatch, SetStateAction } from 'react';
import { TypeButton } from './ChooseUserType.style';
import { useState } from 'react';
interface Props {
  userType: string,
  setUserType: Dispatch<SetStateAction<string>>,
  clickedId: number,
  setClickedId: Dispatch<React.SetStateAction<number>>
}

export const ButtonGroup = ({ setUserType, clickedId, setClickedId }: Props) => {

  const [buttons, setButtons] = useState(["Food lover", "Restaurant", "Supplier"])

  const handleUserType = (name: string) => {
    name === 'Food lover' ? setUserType('Food lover')
      : name === 'Restaurant' ? setUserType('Restaurant')
        : name === 'Supplier' ? setUserType('Supplier')
          : setUserType('');
  }

  const handleTypeClick = (name: string, id: number) => {
    console.log(name);
    setClickedId(id);
    handleUserType(name)
  }

  return (
    <div>
      {buttons.map((buttonLabel: string, i: number) =>
        <TypeButton
          key={i}
          name={buttonLabel}
          onClick={({ currentTarget: { name } }) => handleTypeClick(name, i)}
          isActive={i === clickedId ? true : false}>
          {buttonLabel}
        </TypeButton>
      )}
    </div>
  )
}