import React, { Component } from 'react';

class AdmissionForm extends Component {
   render() {
      return (
         <div className='form'>
            <div className='container'>
               <h2>Admission Form</h2>
               <form>
                  <div>
                     <input
                        type='text'
                        name='First Name'
                        placeholder='First Name'
                     />
                  </div>
                  <div>
                     <input
                        type='text'
                        name='Last Name'
                        placeholder='Last Name'
                     />
                  </div>
                  <div>
                     <input type='text' name='Sur Name' placeholder='Surname' />
                  </div>
                  <div>
                     <input type='text' name='Address' placeholder='Address' />
                  </div>
                  <div>
                     <input
                        type='date'
                        name='Date of Birth'
                        placeholder='Date of Birth'
                     />
                  </div>
                  <div>
                     <input
                        type='text'
                        name='State of Origin'
                        placeholder='State of Origin'
                     />
                  </div>
                  <div>
                     <input
                        type='text'
                        name='Religion'
                        placeholder='Religion'
                     />
                  </div>
                  <div className='class-selection'>
                     <h4>Class</h4>
                     <div>
                        <small>Select entry class</small>
                     </div>
                     <div className='select'>
                        <select name='classes' id=''>
                           <option value='creche'>Creche (0 to 1 years)</option>
                           <option value='nursery-one'>
                              Nursery One (2 years)
                           </option>
                           <option value='nursery-two'>
                              Nursery Two (3 years)
                           </option>
                           <option value='primary-One'>
                              Primary One (4 years)
                           </option>
                           <option value='primary-two'>
                              Primary Two (5 years)
                           </option>
                           <option value='primary-three'>
                              Primary Three (6 years)
                           </option>
                           <option value='nursery-one'>
                              Primary Four (7 years)
                           </option>
                           <option value='nursery-one'>
                              Primary Five (8 years)
                           </option>
                        </select>
                     </div>
                  </div>
                  <div className='parent-form'>
                     <div>
                        <input
                           type='text'
                           name='parent-name'
                           placeholder='Name of Parent'
                        />
                     </div>
                     <div>
                        <input
                           type='text'
                           name='parent-occupation'
                           placeholder='Parent&#39;s Occupation'
                        />
                     </div>
                     <div>
                        <input
                           type='text'
                           name='parent-address'
                           placeholder='Parent&#39;s Address'
                        />
                     </div>
                     <div>
                        <input
                           type='text'
                           min='0'
                           max='11'
                           name='parent-phone'
                           placeholder='Parent&#39;s Telephone'
                        />
                     </div>
                     <div>
                        <input
                           type='email'
                           name='parent-email'
                           placeholder='Email'
                        />
                     </div>
                  </div>
                  <div className='discussion'>
                     <textarea
                        name='discussion'
                        id=''
                        cols='10'
                        rows='10'
                        placeholder='How did you learn about Monarch Educational Foundation?'
                     ></textarea>
                     <div>
                        <input
                           type='text'
                           name='filled-by-who'
                           placeholder='Form filled by'
                        />
                     </div>
                     <div>
                        <input type='date' name='date' placeholder='Date' />
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
export default AdmissionForm;
