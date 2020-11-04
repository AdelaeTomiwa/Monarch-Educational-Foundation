import React from 'react';
import Showcase from './Showcase';
import HeadProfile from './HeadProfile';
import Curriculum from './Curriculum';
import CurriculumBox from './CurriculumBox';
import AgeGroup from './AgeGroup';
import Footer from '../layout/Footer';

function Academics() {
   return (
      <div className='academics'>
         <Showcase />
         <HeadProfile />
         <Curriculum />
         <CurriculumBox />
         <AgeGroup />
         <Footer />
      </div>
   );
}

export default Academics;
