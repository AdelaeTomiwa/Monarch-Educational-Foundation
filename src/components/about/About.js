import React from 'react';
import Showcase from './Showcase';
import WhoWeAre from './WhoWeAre';
import InfoOne from './InfoOne';
import InfoTwo from './InfoTwo';
import ConnectSocial from './../layout/ConnectSocial';
import Schedule from './../layout/Schedule';
import NewsAndEvents from './../layout/NewsAndEvents';
import Footer from '../layout/Footer';

function About() {
   return (
      <div className='about'>
         <Showcase />
         <WhoWeAre />
         <InfoOne />
         <InfoTwo />
         <ConnectSocial />
         <Schedule />
         <NewsAndEvents />
         <Footer />
      </div>
   );
}

export default About;
