import React from 'react';
import Showcase from './Showcase';
import LatestNews from './LatestNews';
import ConnectSocial from '../layout/ConnectSocial';
import LatestEvents from './LatestEvents';
import Footer from '../layout/Footer';

function News() {
   return (
      <div className='news-section'>
         <Showcase />
         <LatestNews />
         <ConnectSocial />
         <LatestEvents />
         <Footer />
      </div>
   );
}

export default News;
