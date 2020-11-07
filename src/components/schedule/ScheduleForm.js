import React, { useState, useRef, createRef } from 'react';
import InputField from './InputField';

function ScheduleForm() {
   const inputRefs = useRef([createRef(), createRef(), createRef()]);
   const [data, setData] = useState({});

   const handleChange = (name, value) => {
      setData((prev) => ({ ...prev, [name]: value }));
   };

   const submitForm = (e) => {
      e.preventDefault();
      let isValid = true;

      for (let i = 0; i < inputRefs.current.length; i++) {
         const valid = inputRefs.current[i].current.validate();

         if (!valid) {
            isValid = false;
         }

         if (!isValid) {
            return;
         }
      }
   };

   return (
      <div className='form'>
         <div className='container'>
            <h2>Schedule a Visit</h2>

            <form onSubmit={submitForm}>
               <InputField
                  ref={inputRefs.current[0]}
                  name='name'
                  placeholder='Name'
                  type='text'
                  onChange={handleChange}
                  validation={'required|min:3'}
               />
               <InputField
                  ref={inputRefs.current[1]}
                  name='email'
                  placeholder='Email'
                  type='email'
                  onChange={handleChange}
                  validation={'required'}
               />

               <label htmlFor='date-of-visit'>Date of Visitation</label>
               <InputField
                  ref={inputRefs.current[2]}
                  name='dateOfVisit'
                  id='date-of-visit'
                  placeholder='Date of Visitation'
                  type='date'
                  onChange={handleChange}
                  validation={'required'}
               />

               <div className='submit-btn'>
                  <button type='submit'>Submit</button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default ScheduleForm;
