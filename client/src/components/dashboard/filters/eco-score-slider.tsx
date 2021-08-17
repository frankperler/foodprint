import { useContext } from 'react';
import { filterContext } from '../../../contexts/filters-contexts';
import styled from 'styled-components';

export const SliderStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #888;
  margin-top: 1rem;
  flex-shrink:1;

  .value {
    font-size: 0.8rem;
    text-align: left;
  }

  .slider {
    -webkit-appearance: none;
    width: 80%;
    height: 5px;
    margin-top: 1rem;
    border-radius: 5px;
    background: #efefef;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 0.5rem;
      height: 0.5rem;
      background: #84DCC6;
      cursor: pointer;
      outline: 0.1rem solid lightgray;
      opacity: 0.9;
      -webkit-transition: .2s;
      transition: opacity .2s;
    }
  }
`;

export const EcoScoreSlider: React.FunctionComponent = () => {

  const { stateFilter, dispatchFilter } = useContext(filterContext)

  const handleChange = (e: { target: { value: string, } }) => {
    dispatchFilter({ type: 'eco-score-change', payload: +e.target.value })
  }

  return (
    <SliderStyles>
      <div className="value">Eco-Score: {stateFilter.ecoScore}</div>
      <input className="slider" type="range" min={0} max={5} step="0.1" value={stateFilter.ecoScore} onChange={handleChange} />
    </SliderStyles>
  )
}
