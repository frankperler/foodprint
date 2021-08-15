import React from 'react';
import { useState, MouseEvent } from 'react';
import { TypeButton } from './registration-styled-components/ChooseUserType.style';

type Props = {
  buttons: string[];
}



export const ButtonGroup = ({buttons}: Props): JSX.Element => {


  const [clickedId, setClickedId] = useState(-1)



  const handleTypeClick = (e: MouseEvent, id: number) => {
    setClickedId(id);
  }


  return (
    <div> 
     {buttons.map((buttonLabel: string, i: number) =>
      <TypeButton 
        key={i} 
        name={buttonLabel} 
        onClick={(e) => handleTypeClick(e, i)} 
        isActive={i === clickedId ? true : false}>
          {buttonLabel}
        </TypeButton>
      )}
    </div>
  )
}