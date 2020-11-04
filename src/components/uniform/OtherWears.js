import React from 'react';
import SchoolShoe from '../../images/school-shoe.jpg';
import SchoolSocks from '../../images/school-socks.jpg';

function OtherWears() {
   return (
      <div className='other-wears'>
         <div className='container'>
            <div className='boxes'>
               <div>
                  <h3>School Shoe</h3>
                  <img src={SchoolShoe} alt='' />
               </div>
               <div>
                  <h3>School Socks</h3>
                  <img src={SchoolSocks} alt='' />
               </div>
            </div>
         </div>
      </div>
   );
}

export default OtherWears;
