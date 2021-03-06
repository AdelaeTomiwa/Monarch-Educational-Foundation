import React from 'react';
import Showcase from './Showcase';
import WhoWeAre from './WhoWeAre';
import Schedule from './../layout/Schedule';
import NewsAndEvents from './../layout/NewsAndEvents';
import Footer from '../layout/Footer';

function Home() {
   return (
      <div className='home'>
         <Showcase />
         <WhoWeAre />
         <Schedule />
         <NewsAndEvents />
         <Footer />
      </div>
   );
}

export default Home;
