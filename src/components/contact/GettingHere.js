import React from 'react';
import { Link } from 'react-router-dom';

function GettingHere() {
   return (
      <div className='getting-here'>
         <div className='container'>
            <h3>Getting Here</h3>
            <p>
               For the Information on getting to Monarch Educational Foundation,
               please see our{' '}
               <Link to='/directions'>
                  <span className='text-primary'>How to find us Page</span>
               </Link>
            </p>
         </div>
      </div>
   );
}

export default GettingHere;
