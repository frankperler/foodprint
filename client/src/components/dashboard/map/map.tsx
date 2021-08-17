import { useState } from 'react'
import ReactMapGL from 'react-map-gl';
import './map.css'

export const Map: React.FunctionComponent = () => {

  const [viewport, setViewport] = useState({
    width: "150%",
    height: "150%",
    latitude: 52.518900,
    longitude: 13.409730,
    zoom: 11
  });

  return (
    <ReactMapGL
      className="map"
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={(nextViewport: {
        width: string,
        height: string,
        latitude: number,
        longitude: number,
        zoom: number
      }) => setViewport(nextViewport)}
      mapStyle={process.env.REACT_APP_MAPSTYLES}
    />
  )
}
