import { useState } from 'react'
import ReactMapGL from 'react-map-gl';

export const Map: React.FunctionComponent = () => {

  const [viewport, setViewport] = useState({
    width: "20rem",
    height: "20rem",
    latitude: 52.518900,
    longitude: 13.409730,
    zoom: 11
  });

  return (
    <ReactMapGL
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
