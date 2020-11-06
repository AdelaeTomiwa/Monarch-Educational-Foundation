import React from 'react';
import SchoolBuildOne from '../../images/school-building-one.jpg';
import SchoolBuildTwo from '../../images/school-building-two.jpg';

function InfoOne() {
   return (
      <div className='info-one'>
         <div className='container'>
            <h3>Why Monarch?</h3>
            <p>
               <span className='text-secondary'>
                  Monarch Educational Foundation
               </span>{' '}
               builds an Interactive Communication between the Pupils and their
               Teachers. This helps the Pupils get prepared both Academically
               and also Physically for the college challenges.
            </p>
            <div className='boxes'>
               <div className='img-container'>
                  <img src={SchoolBuildOne} alt='' />
               </div>
               <div className='img-container'>
                  <img src={SchoolBuildTwo} alt='' />
               </div>
            </div>
         </div>
      </div>
   );
}

export default InfoOne;
