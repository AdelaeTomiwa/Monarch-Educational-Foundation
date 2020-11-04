import React from 'react';
import { Link } from 'react-router-dom';

function LatestNews() {
   return (
      <div className='latest-news'>
         <h3>Latest News</h3>
         <p>Get the Latest News About Monarch Latest Events</p>
         <Link to='/news-events/news'>
            <button>
               Get the Latest News <i className='fas fa-chevron-right'></i>
            </button>
         </Link>
      </div>
   );
}

export default LatestNews;
