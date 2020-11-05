import React from 'react';
import { Link } from 'react-router-dom';

// Importing Image
import ImgOne from '../../images/13.jpg';
import ImgTwo from '../../images/14.jpg';

function InfoOne() {
   return (
      <div className='info-one'>
         <div className='container'>
            <div className='boxes'>
               <div>
                  <div className='img-container'>
                     <img src={ImgOne} alt='' />
                  </div>
                  <h3>Social Engagement</h3>
                  <p>
                     We Build an Interactive Learning Environment between the
                     Teacher, Pupils and Parents. This helps both the Pupils,
                     Teachers and the Parent.
                  </p>
               </div>
               <div>
                  <div className='img-container'>
                     <img src={ImgTwo} alt='' />
                  </div>
                  <h3>Supportive Community</h3>
                  <p>
                     When you arrive at Monarch Educational Foundation, Your
                     Children are welcome by a friendly and welcoming community
                     of staff and pupils.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default InfoOne;
