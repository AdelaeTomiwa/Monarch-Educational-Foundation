import React, { Component } from 'react';

class ScheduleForm extends Component {
   render() {
      return (
         <div className='form'>
            <div className='container'>
               <h2>Schedule a Visit</h2>
               <form>
                  <div>
                     <input type='text' name='Name' placeholder='Name' />
                  </div>
                  <div>
                     <input type='email' name='Email' placeholder='Email' />
                  </div>

                  <div className='discussion'>
                     <textarea
                        name='schedule discussion'
                        id=''
                        cols='10'
                        rows='10'
                        placeholder='Matter of Discussion?'
                     ></textarea>

                     <div>
                        <input
                           type='date'
                           name='date'
                           placeholder='Date of Visitation'
                        />
                     </div>
                  </div>
                  <div className='submit-btn'>
                     <button type='submit'>Submit</button>
                  </div>
               </form>
            </div>
         </div>
      );
   }
}
export default ScheduleForm;
