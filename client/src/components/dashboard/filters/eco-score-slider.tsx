import { useContext } from 'react';
import { filterContext } from '../../../contexts/filters-contexts';
import styled from 'styled-components';

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #888;
  margin-top: 1rem;
  margin-bottom: 2rem;

  .value {
    font-size: 0.8rem;
  }

  .slider {
    -webkit-appearance: none;
    width: 80%;
    height: 5px;
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

  const { state, dispatch } = useContext(filterContext)

  const handleChange = (e: { target: { value: string; } }) => {
    dispatch({ type: 'eco-score-change', payload: +e.target.value })
  }

  return (
    <Styles>
      <div className="value">Eco-Score: {state.ecoScore}</div>
      <input className="slider" type="range" min={0} max={5} step="0.1" value={state.ecoScore} onChange={handleChange} />
    </Styles>
  )
}
