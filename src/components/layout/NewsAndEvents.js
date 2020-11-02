import React from 'react';
import { Link } from 'react-router-dom';

function NewsAndEvents() {
   return (
      <div className='news-events'>
         <div className='container'>
            <div className='contents'>
               <div className='news'>
                  <Link to='/news-events/news'>
                     <h3>News</h3>
                     <p>Get Latest News About Monarch</p>
                  </Link>
               </div>
               <div className='events'>
                  <Link to='/news-events/events'>
                     <h3>Events</h3>
                     <p>Stay Tuned About Monarch Latest Events</p>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default NewsAndEvents;
