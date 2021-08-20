import { useContext } from 'react';
import { filterContext } from '../../../contexts/filters-contexts';
import styled from 'styled-components';

export const BioStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #888;
  margin-top: 1rem;
  font-size: 0.8rem;
  /* flex-shrink:1; */

  .radioArea {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-right: 1rem;
    font-size: 0.8rem;
  }

  .radioTxt {
    padding: 0rem 0.5rem;
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
      <div className="value">Bio</div>
      <div className="radioArea">
        <input className="radioBtn" type="radio" name="bool" value="true" checked={stateFilter.bio === true} onChange={handleChange} />
        <div className="radioTxt">Yes</div>
        <input className="radioBtn" type="radio" name="bool" value="false" checked={stateFilter.bio === false} onChange={handleChange} />
        <div className="radioTxt">No</div>
      </div>
    </BioStyles>
  )
}
