import React from 'react';
import ImgOne from '../../images/5.jpg';
import ImgTwo from '../../images/6.jpg';
import ImgThree from '../../images/7.jpg';

function LatestEvents() {
   return (
      <div className='latest-events'>
         <div className='container'>
            <h2>Latest Events</h2>
            <div className='events-container'>
               <div className='events'>
                  <div className='events-img'>
                     <img src={ImgOne} alt='' />
                  </div>
                  <div className='events-content'>
                     <h4>End of the Year Party</h4>
                     <h6>18, Dec 2020</h6>
                     <p>
                        There would be a celebration at the end of the learning
                        season to celebrate with the pupils, parents and also
                        the teachers. There will be two weeks holiday break for
                        the pupils after the celebration.
                     </p>
                  </div>
               </div>
               <div className='events'>
                  <div className='events-img'>
                     <img src={ImgTwo} alt='' />
                  </div>
                  <div className='events-content'>
                     <h4>Inter-house Sport Marathon Race</h4>
                     <h6>5, Jan 2021</h6>
                     <p>
                        There will be an Inter-house-sport competition on the
                        fifth of January two weeks after the resumption of the
                        second term. There will be Four Participating Club house
                        : “Red”,”Blue”,”Green”,”Yellow”. The First , Second and
                        Third will be awarded a Prize.
                     </p>
                  </div>
               </div>
               <div className='events'>
                  <div className='events-img'>
                     <img src={ImgTwo} alt='' />
                  </div>
                  <div className='events-content'>
                     <h4>Election of Class President</h4>
                     <h6>1, March 2021</h6>
                     <p>
                        A class president will be elected for different class
                        which will be the head of the class for the whole term.
                        All Pupils are allowed to participate and to be voted
                        for. this will take place on the 1st of March.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default LatestEvents;
