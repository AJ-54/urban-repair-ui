import React from 'react';
// material-ui
import { Grid, Link } from '@material-ui/core';
import MuiTypography from '@material-ui/core/Typography';

// project imports
import SubCard from './../../ui-component/cards/SubCard';
import MainCard from './../../ui-component/cards/MainCard';
import SecondaryAction from './../../ui-component/cards/CardSecondaryAction';
import { gridSpacing } from './../../store/constant';

//==============================|| Maps ||==============================//

// function initMap(latitude, longitude, markers) {
//   var map = L.map('mapid').setView([latitude, longitude], 13);

//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(map);

//   markers.map((e, i)=>{
//     var latitude = e[0], longitude = e[1];
//     L.marker(new L.LatLng(latitude, longitude), { draggable: false }).addTo(map);
//   })
// }
  
const MapWrapper = ({markers}) => {
  const mapRef = React.useRef(null);
  React.useEffect(()=>{
    if (window.navigator.geolocation) {
      // Geolocation available
      window.navigator.geolocation.getCurrentPosition((e) => {
        var { latitude, longitude } = e.coords;
        // initMap(latitude, longitude, [...markers, [latitude, longitude]]);
      }, () => {
        // initMap(51.5, -0.09, [[51.5, -0.09]]);
      });
    }
  }, [])
  return (
    <>
      <div id="mapid" style={{ height: `100%` }} ref={mapRef}></div>
    </>
  );
};
  
const Maps = () => {
    return (
        <MainCard title="Basic Maps" secondary={<SecondaryAction link="https://next.material-ui.com/system/Mpas/" />}>
          <MapWrapper markers={[]} />
        </MainCard>
    );
};

export default Maps;
