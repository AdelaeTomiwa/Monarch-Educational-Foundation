import React, { Component } from 'react';

export default class CalenderContainer extends Component {
   state = {
      today: new Date(),
      headerDay: '',
   };
   render() {
      return (
         <div className='calender-container'>
            <div className='container'>
               <h2>3, November 2020</h2>
               <div className='calender-box'>
                  <div className='calender-day'>
                     <h3>4</h3>
                     <h4>Nov</h4>
                  </div>
                  <div className='calender-content'>
                     <h4>Opening Day</h4>
                     <p>
                        There will be an Opening Day on the 4th of November at
                        the School. The parent will be given access to review
                        the Pupils work and check out what they have done so far
                     </p>
                  </div>
               </div>
               <div className='calender-box'>
                  <div className='calender-day'>
                     <h3>10</h3>
                     <h4>Nov</h4>
                  </div>
                  <div className='calender-content'>
                     <h4>Resumption of Mid Term Break</h4>
                     <p>
                        The Pupils are to resume back at school on the 10th of
                        Nov from the Mid Term Break. There will be an immediate
                        resumption in the school activities.
                     </p>
                  </div>
               </div>
               <div className='calender-box'>
                  <div className='calender-day'>
                     <h3>5</h3>
                     <h4>Dec</h4>
                  </div>
                  <div className='calender-content'>
                     <h4>Christmas Carol</h4>
                     <p>
                        There is going to be a celebration of the christmas
                        carol at the school compound under the canopy. We Gladly
                        invite the parents to felicitate with us.
                     </p>
                  </div>
               </div>
               <div className='calender-box'>
                  <div className='calender-day'>
                     <h3>18</h3>
                     <h4>Dec</h4>
                  </div>
                  <div className='calender-content'>
                     <h4>End of the term</h4>
                     <p>
                        There will be an Opening Day on the 4th of November at
                        the School. The parent will be given access to review
                        the Pupils work and check out what they have done so far
                     </p>
                  </div>
               </div>
               <button className='continue'>
                  Continue Reading <i className='fas fa-chevron-right'></i>
               </button>
            </div>
         </div>
      );
   }
}
