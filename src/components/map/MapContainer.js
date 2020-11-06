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
               onClick={() => alert('Monarch Educational Foundation')}
            />
         );
      });
   };
   render() {
      return (
         <div className='map-container'>
            <Map
               google={this.props.google}
               zoom={14}
               className='direction-map'
               style={mapStyle}
               initialCenter={{ lat: 7.3775, lng: 3.947 }}
            >
               {this.showMap()}
            </Map>
         </div>
      );
   }
}

const mapStyle = {
   width: '100%',
   height: '100%',
   overflow: 'hidden',
};

export default GoogleApiWrapper({
   apiKey: 'AIzaSyA8o1t8eo88QfNrDoKBhAnaNHZaQvxtRBQ',
})(MapContainer);
