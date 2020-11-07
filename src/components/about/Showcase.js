import React from 'react';
import ShowcaseImg from '../../images/showcase-about.jpg';

function Showcase() {
   return (
      <div className='showcase'>
         <div className='showcase-img'>
            <img src={ShowcaseImg} alt='' />
            <div className='container'>
               <div className='showcase-content'>
                  <h1>
                     About Monarch <span>Educational Foundation</span>
                  </h1>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Showcase;
