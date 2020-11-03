import React from 'react';
import { Link } from 'react-router-dom';
import ShowcaseImg from '../../images/showcase-about.jpg';

function Showcase() {
   return (
      <div className='showcase'>
         <div className='showcase-img'>
            <img src={ShowcaseImg} alt='' />
            <div className='container'>
               <div className='showcase-content'>
                  <h1>Latest News About Monarch Educational Foundation</h1>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Showcase;
