import React from 'react';
import { useState, MouseEvent } from 'react';
import { TypeButton } from './registration-styled-components/ChooseUserType.style';



export const ButtonGroup = ({buttons, doAfterClick, isActive}) => {


  const [clickedId, setClickedId] = useState(-1)

  const handleTypeClick = (e, id) => {
    setClickedId(id);
    doAfterClick(e);
  }


  return (
    <div> 
     {buttons.map((buttonLabel, i) =>
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