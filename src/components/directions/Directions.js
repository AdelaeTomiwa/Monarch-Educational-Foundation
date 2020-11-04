import React from 'react';
import Showcase from './Showcase';
import InfoOne from './InfoOne';
import TravelInfo from './TravelInfo';
import ConnectSocial from '../layout/ConnectSocial';
import Footer from '../layout/Footer';

function Directions() {
   return (
      <div className='direction'>
         <Showcase />
         <InfoOne />
         <TravelInfo />
         <ConnectSocial />
         <Footer />
      </div>
   );
}

export default Directions;
