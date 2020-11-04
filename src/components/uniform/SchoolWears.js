import React from 'react';
import UniformBoy from '../../images/uniform-boy.jpg';
import UniformGirl from '../../images/uniform-girl.jpg';

function SchoolWears() {
   return (
      <div className='school-wears'>
         <div className='container'>
            <div className='boxes'>
               <div>
                  <h3>Boys</h3>
                  <img src={UniformBoy} alt='' />
               </div>
               <div>
                  <h3>Girls</h3>
                  <img src={UniformGirl} alt='' />
               </div>
            </div>
         </div>
      </div>
   );
}

export default SchoolWears;
