import React from 'react';
import Showcase from './Showcase';
import InfoOne from './InfoOne';
import Mission from './Mission';
import Vision from './Vision';
import ApplyNow from './ApplyNow';
import Schedule from './../layout/Schedule';
import Footer from '../layout/Footer';

function WhyMonarch() {
   return (
      <div className='why-monarch'>
         <Showcase />
         <InfoOne />
         <Mission />
         <Vision />
         <ApplyNow />
         <Schedule />
         <Footer />
      </div>
   );
}

export default WhyMonarch;
