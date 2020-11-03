import React from 'react';
import GraduateBoy from '../../images/graduate-boy.jpg';
import StudentWriting from '../../images/student-writing.jpg';

function Mission() {
   return (
      <div className='mission'>
         <div className='container'>
            <h3>
               <span className='text-primary'>Mission</span>
            </h3>
            <p>
               <span className='text-primary'>
                  Monarch Educational Foundation
               </span>{' '}
               is one of the Best Private Primary School in the Whole of Ibadan.
               Our Mission are :
            </p>
            <h5>Understanding the core values</h5>
            <h5>Contributing to the Society Positively</h5>
         </div>

         <div className='img-container'>
            <img src={StudentWriting} alt='' />
         </div>
      </div>
   );
}

export default Mission;
