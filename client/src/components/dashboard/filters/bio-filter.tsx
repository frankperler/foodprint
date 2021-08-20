import { useContext } from 'react';
import { filterContext } from '../../../contexts/filters-contexts';
import styled from 'styled-components';

export const BioStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #888;
  margin-top: 1rem;
  flex-shrink:1;

  .value {
    font-size: 0.8rem;
    text-align: left;
  }

  .formBtn {
    margin-top: 1rem;
    border-radius: 5px;
    background: #efefef;
  }

  .radioBtn {
    font-size: 0.2rem;
  }
`;

export const BioFilter: React.FunctionComponent = () => {

  const { stateFilter, dispatchFilter } = useContext(filterContext)

  const handleChange = (e: { target: { value: string, } }) => {
    let bool: boolean;
    (e.target.value === 'true') ? bool = true : bool = false;
    dispatchFilter({ type: 'bio-change', payload: bool })
  }

  return (
    <BioStyles>
      <div className="value">Bio: {stateFilter.bio}</div>
      <form>
        <input className="radioBtn" type="radio" name="bool" value="true" checked={stateFilter.bio === true} onChange={handleChange} />Yes
        <input className="radioBtn" type="radio" name="bool" value="false" checked={stateFilter.bio === false} onChange={handleChange} />No
      </form>
    </BioStyles>
  )
}
