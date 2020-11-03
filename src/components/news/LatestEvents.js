import React from 'react';
import { Link } from 'react-router-dom';

function LatestEvents() {
   return (
      <div className='latest-events'>
         <h3>Latest Events</h3>
         <p>Stay Tuned About Monarch Latest Events</p>
         <Link to='/news-events/events'>
            <button>
               Get the Latest Events <i className='fas fa-chevron-right'></i>
            </button>
         </Link>
      </div>
   );
}

export default LatestEvents;
