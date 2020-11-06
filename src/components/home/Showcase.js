import React from 'react';
import { Link } from 'react-router-dom';
import ShowcaseImg from '../../images/showcase-home.jpg';

function Showcase() {
   return (
      <div className='showcase'>
         <div className='showcase-img'>
            <img src={ShowcaseImg} alt='' />
            <div className='container'>
               <div className='showcase-content'>
                  <h1>Faith, Community & Excellence</h1>
                  <h4>
                     Education in an environment of Faith and virtue for
                     Pre-Kindergarten through 8th Grade
                  </h4>
                  <Link to='/contact'>
                     <button>ENROLL WITH US NOW</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Showcase;
