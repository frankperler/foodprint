import { Dispatch, SetStateAction } from 'react';
import { Wrapper, Header1 } from './registration-styled-components/ChooseUserType.style';
import { ButtonGroup } from './registration-styled-components/ButtonGroup'

interface Props {
  userType: string,
  setUserType: Dispatch<SetStateAction<string>>,
  clickedId: number,
  setClickedId: Dispatch<React.SetStateAction<number>>
}

export const ChooseUserType = ({ clickedId, setClickedId, userType, setUserType }: Props) => {

  return (
    <Wrapper>
      <section>
        <Header1>I'm a...</Header1>
        <ButtonGroup clickedId={clickedId} setClickedId={setClickedId} setUserType={setUserType} userType={userType} />
      </section>
    </Wrapper>
  )
}

export default ChooseUserType;