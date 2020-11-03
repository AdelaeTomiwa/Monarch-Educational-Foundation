import React from 'react';
import StudentWriting from '../../images/student-writing.jpg';

function Vision() {
   return (
      <div className='vision'>
         <div className='container'>
            <h3>
               <span className='text-primary'>Vision</span>
            </h3>
            <p>Our Vision are :</p>
            <h5>Build Pupils with wonderful Communication Skills</h5>
            <h5>Develop Pupils with Great Social Engagement</h5>
         </div>

         <div className='img-container'>
            <img src={StudentWriting} alt='' />
         </div>
      </div>
   );
}

export default Vision;
