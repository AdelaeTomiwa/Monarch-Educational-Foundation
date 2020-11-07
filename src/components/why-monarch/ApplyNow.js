import React from 'react';
import { Link } from 'react-router-dom';

function ApplyNow() {
   return (
      <div className='apply-now'>
         <h3>Apply to Monarch Educational Foundation</h3>
         <Link to='/admission' className='text-primary'>
            <h4>Apply</h4>
         </Link>
      </div>
   );
}

export default ApplyNow;
