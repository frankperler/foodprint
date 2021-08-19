import { useContext } from 'react';
import { filterContext } from '../../../contexts/filters-contexts';
import { SliderStyles } from './eco-score-slider';

export const DistanceSlider: React.FunctionComponent = () => {

  const { stateFilter, dispatchFilter } = useContext(filterContext)

  const handleChange = (e: { target: { value: string; } }) => {
    dispatchFilter({ type: 'distance-change', payload: +e.target.value })
  }

  return (
    <SliderStyles>
      <div className="value">Distance: {stateFilter.distance} km</div>
      <input className="slider" type="range" min={0} max={50} value={stateFilter.distance} onChange={handleChange} />
    </SliderStyles>
  )
}