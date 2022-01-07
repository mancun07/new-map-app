import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { useSelector } from 'react-redux';

const Map = () => {

  const items = useSelector(state => state.country.items)
  const filteredItems = useSelector(state => state.country.filteredItems)

  const updatedItems = items.map(el => {
    return {
      ...el,
      id: Math.random()
    }
  })

  const updatedFilteredItems = items.map(el => {
    return {
      ...el,
      id: Math.random()
    }
  })

  const itemsToMap = updatedItems.map((el) => {
    return <Marker key={el.id}
    lat={el.latlng[0]}
    lng={el.latlng[1]}
    name={el.name.common}
    flag={el.flags.svg}
  />
})

  const filteredItemsToMap = filteredItems && updatedFilteredItems.map((el) => {
    return <Marker key={el.id}
    lat={el.latlng[0]}
    lng={el.latlng[1]}
    name={el.name.common}
    flag={el.flags.svg}
  />
})


    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={{lat: 59.95, lng: 30.33}}
        defaultZoom={3}
      >
        {!filteredItems ? itemsToMap : filteredItemsToMap}

      </GoogleMapReact>
    </div>
    )
}


export default Map
