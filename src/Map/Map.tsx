import React, { Component } from 'react';
import GoogleMap  from 'google-map-react';
import  {isMobile} from "react-device-detect";


const containerStyle = {
    width: isMobile ?  '25rem':'100%',
    height: isMobile ?'30rem':'100%' ,
  };
  const center = {
    lat:4.674408,
    lng:-74.067470
  }
  
  
    const renderMarkers = (map:any, maps:any) => {
     let marker = new maps.Marker({
      position: { lat: center.lat, lng: center.lng },
      map,
      title: 'Masjid Abu Baker Sedik '
      });
      return marker;
    };
function Map() {
  
  
      
    
      return  (
        <div style ={containerStyle}>
            <GoogleMap
            bootstrapURLKeys={{key:"AIzaSyDRyHuEkVfX95DwMApDDFEbM4K5JJYdPPM"}}
          center={center}
          zoom={11}
          yesIWantToUseGoogleMapApiInternals
           onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)} 
          >
         
          { /* Child components, such as markers, info windows, etc. */ }
       </GoogleMap>
        </div>
          
      )  
}
export default Map

