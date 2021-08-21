import { useState, useContext } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { supplierContext } from '../../../contexts/suppliers-contexts';
import { restaurantContext } from '../../../contexts/restaurants-contexts';
import { Room } from '@material-ui/icons';
import { restaurantTypes } from '../../../types/restaurant-types';
import { supplierTypes } from '../../../types';
import { PinRestaurantCard } from './pin-restaurants-card';
import { SupplierCard } from '../results/suppliers-card';

interface Props {
  userType: string,
}

export const Map = ({ userType }: Props) => {

  const handlePopupClick = (id: string, lat: number, long: number) => {
    setCurrentPinId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long })
  };

  const [currentPinId, setCurrentPinId] = useState("");
  const { stateSupplier } = useContext(supplierContext)
  const { stateRestaurant } = useContext(restaurantContext)

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 52.518900,
    longitude: 13.409730,
    zoom: 11
  });

  return (
    <>
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
      >
        {
          ((userType === 'Food lover') || (userType === 'Supplier')) ?
            stateRestaurant && stateRestaurant.map((restaurant: restaurantTypes) => (
              <>
                <Marker
                  latitude={+restaurant.rest_lat}
                  longitude={+restaurant.rest_lng}
                >
                  <Room style={{
                    fontSize: viewport.zoom * 2,
                    color: '#FFA69E',
                    cursor: 'pointer'
                  }}
                    onClick={() => handlePopupClick(JSON.stringify(restaurant.id), restaurant.rest_lat, restaurant.rest_lng)}
                  />
                </Marker>
                {(JSON.stringify(restaurant.id) === currentPinId) && (
                  <Popup
                    latitude={+restaurant.rest_lat}
                    longitude={+restaurant.rest_lng}
                    closeButton={true}
                    closeOnClick={false}
                    anchor="bottom"
                    onClose={() => setCurrentPinId("")}
                  >
                    <div className='popup'>
                      <PinRestaurantCard restaurant={restaurant} />
                    </div>
                  </Popup>
                )}
              </>
            ))
            :
            stateSupplier && stateSupplier.map((supplier: supplierTypes) => (
              <>
                <Marker
                  latitude={+supplier.sup_lat}
                  longitude={+supplier.sup_lng}
                >
                  <Room style={{
                    fontSize: viewport.zoom * 2,
                    color: '#FFA69E',
                    cursor: 'pointer'
                  }}
                    onClick={() => handlePopupClick(JSON.stringify(supplier.sup_id), supplier.sup_lat, supplier.sup_lng)}
                  />
                </Marker>
                {(JSON.stringify(supplier.sup_id) === currentPinId) && (
                  <Popup
                    latitude={+supplier.sup_lat}
                    longitude={+supplier.sup_lng}
                    closeButton={true}
                    closeOnClick={false}
                    anchor="bottom"
                    onClose={() => setCurrentPinId("")}
                  >
                    <div className='popup'>
                      <SupplierCard supplier={supplier} />
                    </div>
                  </Popup>
                )}
              </>
            ))}
      </ReactMapGL>
    </>
  )
}