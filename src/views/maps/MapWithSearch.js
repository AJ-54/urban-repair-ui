import React, { useEffect, useRef } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

const defaultCenter = [38.9072, -77.0369];
const defaultZoom = 8;
const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png"
});


function MapApp() {
  const mapRef = useRef();

  /**
   * handleOnSetView
   */

   function handleOnSetView(coords) {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.setView(coords, 14);
  }

  /**
   * handleOnFlyTo
   */

  function handleOnFlyTo(coords) {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.flyTo(coords, 14, { duration: 2 });
  }

  function addMarker(coords) {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    
    L.marker(coords, {icon}).addTo(map).openPopup();
  }

  useEffect(()=>{
    if (window.navigator.geolocation) {
      // Geolocation available

      const handle = (Math.random()<0.8)?handleOnFlyTo:handleOnSetView;

      window.navigator.geolocation.getCurrentPosition((e) => {
          var { latitude, longitude } = e.coords;
          window.coords = [latitude, longitude];
          handle([latitude, longitude])
          addMarker(window.coords);
      }, () => {
          window.coords = defaultCenter;
          handle(defaultCenter);
          addMarker(window.coords);
      });
  }
  })

  

  return (
    <div className="MapApp">
      <Map ref={mapRef} center={defaultCenter} zoom={defaultZoom} style={{width:'100%', height:'800px'}}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </Map>

    </div>
  );
}

export default MapApp;
