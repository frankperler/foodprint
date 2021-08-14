import React from 'react';
import { useState } from 'react';
import { TypeButton } from './registration-styled-components/ChooseUserType.style';


export const ButtonGroup = ({buttons, doSomethingAfterClick}): JSX.Element => {


  const [clickedId, setClickedId] = useState<number>(-1)

  const handleTypeClick = (e: MouseEvent, id: number) => {
    setClickedId(id)
    console.log(e);
  }


  return (
    <>  
      {buttons.map((i: number, buttonLabel: string) => {
            <TypeButton key={i} name={buttonLabel} onClick={(e) => handleTypeClick(e, i)}>{buttonLabel}</TypeButton>
      })}
    </>
  )
}