import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import ImageOne from '../../images/1.jpg';
import ImageTwo from '../../images/2.jpg';
import ImageThree from '../../images/3.jpg';
import ImageFour from '../../images/4.jpg';

function WhoWeAre() {
   return (
      <React.Fragment>
         <div className='info-one'>
            <div className='container'>
               <div className='boxes'>
                  <Link to='/academics'>
                     <div>
                        <img src={ImageTwo} alt='' />
                        <h3>Academics</h3>
                     </div>
                  </Link>
                  <Link to='/about'>
                     <div>
                        <img src={ImageOne} alt='' />
                        <h3>Who We Are</h3>
                     </div>
                  </Link>
                  <Link to='/community'>
                     <div>
                        <img src={ImageThree} alt='' />
                        <h3>Community</h3>
                     </div>
                  </Link>
               </div>
            </div>
         </div>
         <div className='who-we-are'>
            <div className='container'>
               <div className='boxes'>
                  <div>
                     <img src={ImageThree} alt='' />
                  </div>
                  <div className='content'>
                     <h3>Who We Are</h3>
                     <p>
                        <span className='text-primary'>
                           Monarch Educational Foundation
                        </span>{' '}
                        is a school of Upright Morals and High Discipline. We
                        provide your Children with Excellent Academic Education
                        and ensure they all come out in flying colors
                     </p>
                  </div>
               </div>
               <div className='quote'>
                  <p>
                     "
                     <span className='text-primary'>
                        Monarch Educational Foundation
                     </span>{' '}
                     is an Academically Challenging School. Our number one Goal
                     is to provide the Pupils with adequate Knowledge Required
                     to stand firm in College"
                  </p>
                  <small>By Dr. Simon Akinteye</small>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
}

export default WhoWeAre;
