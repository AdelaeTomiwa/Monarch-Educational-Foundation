import React from 'react';
import Showcase from './Showcase';
import InfoOne from './InfoOne';
import Images from './Images';

function Gallery() {
   return (
      <div className='gallery'>
         <Showcase />
         <InfoOne />
         <Images />
      </div>
   );
}

export default Gallery;
