import React from 'react';
import Showcase from './Showcase';
import MapContainer from './MapContainer';

function Map() {
   return (
      <div className='map'>
         <Showcase />
         <MapContainer />
      </div>
   );
}

export default Map;
