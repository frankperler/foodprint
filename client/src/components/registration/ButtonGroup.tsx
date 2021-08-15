import React from 'react';
import { useState, MouseEvent } from 'react';
import { TypeButton } from './registration-styled-components/ChooseUserType.style';

type Props = {
  buttons: string[];
  doAfterClick: any;
}

export const ButtonGroup = ({buttons}: Props, {doAfterClick}: Props): JSX.Element => {


  const [clickedId, setClickedId] = useState<number>(-1)

  const handleTypeClick = (e: MouseEvent, id: number) => {
    setClickedId(id)
    doAfterClick(e);
  }


  return (
    <div> 
     {buttons.map((buttonLabel: string, i: number) =>
      <TypeButton key={i} name={buttonLabel} onClick={(e) => handleTypeClick(e, i)}>{buttonLabel}</TypeButton>
      )}
    </div>
  )
}