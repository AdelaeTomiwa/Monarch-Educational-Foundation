import React from 'react';

// Importing Images
import ImgOne from '../../images/8.jpg';

function InfoTwo() {
   return (
      <div className='info-two'>
         <div className='boxes'>
            <div>
               <h3>A Unique Primary School</h3>
               <p>
                  <span className='text-primary'>
                     Monarch Educational foundation
                  </span>{' '}
                  has been recognized as one of the top 10 Private Primary
                  School in the whole of ibadan, Abarapa Local Government for
                  working as one community to make a difference globally.{' '}
               </p>
            </div>
            <div className='img-container'>
               <img src={ImgOne} alt='' />
            </div>
         </div>
      </div>
   );
}
export default InfoTwo;
