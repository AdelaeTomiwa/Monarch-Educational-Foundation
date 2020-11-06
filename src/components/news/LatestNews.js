import React from 'react';
import ImgOne from '../../images/5.jpg';
import ImgTwo from '../../images/6.jpg';

function LatestNews() {
   return (
      <div className='latest-news'>
         <div className='container'>
            <h2>Latest News</h2>
            <div className='news-container'>
               <div className='news'>
                  <div className='news-img'>
                     <img src={ImgOne} alt='' />
                  </div>
                  <div className='news-content'>
                     <h4>New Sitting and Writing Table</h4>
                     <h6>2, Nov 2020</h6>
                     <p>
                        The Chairman of{' '}
                        <span className='text-primary'>
                           Monarch Educational Foundational
                        </span>{' '}
                        Provided adequate Sitting and Writing Chairs to the
                        School. This as facilitated the Learning Steep of the
                        Pupils and there has been Obvious Positive Outcome.{' '}
                     </p>
                  </div>
               </div>
               <div className='news'>
                  <div className='news-img'>
                     <img src={ImgTwo} alt='' />
                  </div>
                  <div className='news-content'>
                     <h4>Mid Term Test and Break</h4>
                     <h6>10, Nov 2020</h6>
                     <p>
                        <span className='text-primary'>
                           Monarch Educational Foundation
                        </span>{' '}
                        has decided to observe it Mid Term Test and Mid Term
                        Break.The Test is to check the ability of the Pupils and
                        to know how well they understand what they have been
                        taught so far. The break will be observed for four days.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default LatestNews;
