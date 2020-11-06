import React from 'react';
import { Link } from 'react-router-dom';
import VehicleImg from '../../images/vehicle.jpg';
import TaxiImg from '../../images/taxi.jpg';

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
                  <img src={TaxiImg} alt='' />
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
            <Link to='/map'>
               <div className='boxes map'>
                  <button>Check Out the Map</button>
               </div>
            </Link>
         </div>
      </div>
   );
}

export default TravelInfo;
