import React from 'react';
import Showcase from '../uniform/Showcase';
import InfoOne from './InfoOne';
import SchoolWears from './SchoolWears';
import OtherWears from './OtherWears';
import Footer from '../layout/Footer';

function Uniform() {
   return (
      <div className='uniform'>
         <Showcase />
         <InfoOne />
         <SchoolWears />
         <OtherWears />
         <Footer />
      </div>
   );
}

export default Uniform;
