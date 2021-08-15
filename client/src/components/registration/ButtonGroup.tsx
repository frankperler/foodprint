import React from 'react';
import { useState } from 'react';
import { TypeButton } from './registration-styled-components/ChooseUserType.style';

type Props = {
  buttons: string[];
}

export const ButtonGroup = ({buttons}: Props): JSX.Element => {


  // const [clickedId, setClickedId] = useState<number>(-1)

  // const handleTypeClick = (e: any, id: number) => {
  //   setClickedId(id)
  //   console.log(e);
  // }


  return (
    <div> 
     {buttons.map((buttonLabel: string, i: number) =>
      <TypeButton key={i} name={buttonLabel}>{buttonLabel}</TypeButton>
      )}
    </div>
  )
}