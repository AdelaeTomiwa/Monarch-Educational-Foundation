import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
   state = {
      locations: [
         { lat: 7.4342, lng: 3.9496 },
         { lat: 7.3415, lng: 3.8723 },
         { lat: 7.4356, lng: 3.9824 },
      ],
   };

   showMap = () => {
      return this.state.locations.map((location, index) => {
         return (
            <Marker
               position={{ lat: location.lat, lng: location.lng }}
               id={index}
               key={index}
               onClick={() => alert(123)}
            />
         );
      });
   };
   render() {
      return (
         <div>
            <div className='container'>
               <div className='map'>
                  <Map
                     google={this.props.google}
                     zoom={8}
                     className='direction-map'
                     style={mapStyle}
                     initialCenter={{ lat: 7.3775, lng: 3.947 }}
                  >
                     {this.showMap()}
                  </Map>
               </div>
            </div>
         </div>
      );
   }
}

const mapStyle = {
   width: '500px',
   height: '300px',
};

export default GoogleApiWrapper({
   apiKey: 'AIzaSyA8o1t8eo88QfNrDoKBhAnaNHZaQvxtRBQ',
})(MapContainer);
