import React from 'react';
import Showcase from './Showcase';
import LatestEvents from './LatestEvents';
import ConnectSocial from '../layout/ConnectSocial';
import LatestNews from './LatestNews';
import Footer from '../layout/Footer';

function Events() {
   return (
      <div className='events-section'>
         <Showcase />
         <LatestEvents />
         <ConnectSocial />
         <LatestNews />
         <Footer />
      </div>
   );
}

export default Events;
