import React from 'react';
import VehicleImg from '../../images/vehicle.jpg';
import MapContainer from './MapContainer';

function TravelInfo() {
   return (
      <div className='travel-info'>
         <div className='container'>
            <h3>Travel Information</h3>
            <div className='boxes'>
               <div className='travel-content'>
                  <h3>Private Car</h3>
                  <p>
                     <span className='text-primary'>Monarch </span> can be reach
                     via a public bus or a private vehicle. from london’s
                     office, 50 meters from Total Garden.There is a road going
                     south. going straight through that route will get you to
                     Orita-Challenge. Monarch is less than 10 Minutes drive from
                     Orita-Chalenge.
                  </p>
               </div>
               <div className='img-container'>
                  <img src={VehicleImg} alt='' />
               </div>
            </div>
            <div className='boxes'>
               <div className='img-container'>
                  <img src={VehicleImg} alt='' />
               </div>
               <div className='travel-content'>
                  <h3>Taxi</h3>
                  <p>
                     <span className='text-primary'>Monarch </span> can be reach
                     via a public bus or a private vehicle. from london’s
                     office, 50 meters from Total Garden.There is a road going
                     south. going straight through that route will get you to
                     Orita-Challenge. Monarch is less than 10 Minutes drive from
                     Orita-Chalenge.
                  </p>
               </div>
            </div>
            <div className='boxes'>
               <div className='map-content'>
                  <h3>Map</h3>
               </div>
               <div className='img-container'>
                  <MapContainer />
               </div>
            </div>
         </div>
      </div>
   );
}

export default TravelInfo;
