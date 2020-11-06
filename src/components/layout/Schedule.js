import React from 'react';
import { Link } from 'react-router-dom';

function Schedule() {
   return (
      <div className='schedule'>
         <h3>Schedule a Visit at Monarch Educational Foundation</h3>
         <Link to='contact'>
            <button>
               Schedule a Visit <i className='fas fa-chevron-right'></i>
            </button>
         </Link>
      </div>
   );
}

export default Schedule;
