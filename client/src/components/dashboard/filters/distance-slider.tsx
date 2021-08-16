import { useContext } from 'react';
import { filterContext } from '../../../contexts/filters-contexts';
import { SliderStyles } from './eco-score-slider';

export const DistanceSlider: React.FunctionComponent = () => {

  const { state, dispatch } = useContext(filterContext)

  const handleChange = (e: { target: { value: string; } }) => {
    dispatch({ type: 'distance-change', payload: +e.target.value })
  }

  return (
    <SliderStyles>
      <div className="value">Distance: {state.distance} km</div>
      <input className="slider" type="range" min={0} max={50} value={state.distance} onChange={handleChange} />
    </SliderStyles>
  )
}