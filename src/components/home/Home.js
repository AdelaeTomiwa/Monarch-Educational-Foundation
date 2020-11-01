import React from 'react';
import Showcase from './Showcase';
import WhoWeAre from './WhoWeAre';
import Schedule from './Schedule';
import NewsAndEvents from './NewsAndEvents';

function Home() {
   return (
      <div className='home'>
         <Showcase />
         <WhoWeAre />
         <Schedule />
         <NewsAndEvents />
      </div>
   );
}

export default Home;
