import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { useSelector } from 'react-redux';

const Map = (props) => {

  const items = useSelector(state => state.country.items)
  const filteredItems = useSelector(state => state.country.filteredItems)
  // console.log(items)

  const itemsToMap = items.map((el,i) => {
    return <Marker key={i}
    lat={el.latlng[0]}
    lng={el.latlng[1]}
    // lat={59.955413}
    // lng={30.337844}
    name={el.name.common}
    flag={el.flags.svg}
    // text="My Marker"
  />
})

  const filteredItemsToMap = filteredItems && filteredItems.map((el,i) => {
    return <Marker key={i}
    lat={el.latlng[0]}
    lng={el.latlng[1]}
    // lat={59.955413}
    // lng={30.337844}
    name={el.name.common}
    flag={el.flags.svg}
    // text="My Marker"
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


// defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 20
//   };

export default Map
