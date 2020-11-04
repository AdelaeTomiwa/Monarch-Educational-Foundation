import React from 'react';
import Showcase from './Showcase';
import CalenderContainer from './CalenderContainer';
import ConnectSocial from '../layout/ConnectSocial';
import NewsAndEvents from '../layout/NewsAndEvents';
import Footer from '../layout/Footer';

function Calender() {
   return (
      <div className='calender'>
         <Showcase />
         <CalenderContainer />
         <ConnectSocial />
         <NewsAndEvents />
         <Footer />
      </div>
   );
}

export default Calender;
