import React from 'react';
import { useState, MouseEvent } from 'react';
import { TypeButton } from './registration-styled-components/ChooseUserType.style';

type Props = {
  buttons: string[];
  setUserType: React.Dispatch<React.SetStateAction<string>>;
  setClickedId: React.Dispatch<React.SetStateAction<number>>;
  clickedId: number;
}

export const ButtonGroup = ({buttons, setUserType, clickedId, setClickedId}: Props): JSX.Element => {




   const handleUserType = (name: string)  => {
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
        onClick={({currentTarget: {name}}) => handleTypeClick(name, i)}
        isActive={i === clickedId ? true : false}>
          {buttonLabel}
        </TypeButton>
      )}
    </div>
  )
}