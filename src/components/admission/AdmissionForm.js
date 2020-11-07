import React, { useState, useRef, createRef } from 'react';
import InputField from './InputField';

function AdmissionForm() {
   const inputRefs = useRef([
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
   ]);
   const [data, setData] = useState({});

   const handleChange = (name, value) => {
      setData((prev) => ({ ...prev, [name]: value }));
   };

   // console.log(inputRefs);

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
            <h2>Admission Form</h2>

            <form onSubmit={submitForm}>
               <InputField
                  ref={inputRefs.current[0]}
                  name='firstName'
                  placeholder='First Name'
                  type='text'
                  onChange={handleChange}
                  validation={'required|min:3'}
               />
               <InputField
                  ref={inputRefs.current[1]}
                  name='lastName'
                  placeholder='Last Name'
                  type='text'
                  onChange={handleChange}
                  validation={'required|min:3'}
               />
               <InputField
                  ref={inputRefs.current[2]}
                  name='surName'
                  placeholder='Surname'
                  type='text'
                  onChange={handleChange}
                  validation={'required|min:3'}
               />
               <InputField
                  ref={inputRefs.current[3]}
                  name='address'
                  placeholder='Address'
                  type='text'
                  onChange={handleChange}
                  validation={'required|min:7'}
               />
               <label htmlFor='dob'>Date of Birth</label>
               <InputField
                  ref={inputRefs.current[4]}
                  name='dob'
                  id='dob'
                  placeholder='Date of Birth'
                  type='date'
                  onChange={handleChange}
                  validation={'required|min:6'}
               />
               <InputField
                  ref={inputRefs.current[5]}
                  name='stateOfOrigin'
                  placeholder='State of Origin'
                  type='text'
                  onChange={handleChange}
                  validation={'required|min:4'}
               />
               <div className='religion-selection'>
                  <h4>Religion</h4>
                  <div>Select your religion</div>
                  <div className='select'>
                     <select name='classes' id=''>
                        <option value='christian'>Christian</option>
                        <option value='muslim'>Muslim</option>
                        <option value='others'>Others</option>
                     </select>
                  </div>
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
                        </option>{' '}
                        <option value='primary-two'>
                           {' '}
                           Primary Two (5 years){' '}
                        </option>
                        <option value='primary-three'>
                           {' '}
                           Primary Three (6 years){' '}
                        </option>{' '}
                        <option value='nursery-one'>
                           {' '}
                           Primary Four (7 years)
                        </option>
                        <option value='nursery-one'>
                           Primary Five (8 years){' '}
                        </option>{' '}
                     </select>{' '}
                  </div>{' '}
               </div>
               <div className='parent-form'>
                  <InputField
                     ref={inputRefs.current[6]}
                     name='parentName'
                     placeholder='Parent&#39;s Name'
                     type='text'
                     onChange={handleChange}
                     validation={'required|min:4'}
                  />
                  <InputField
                     ref={inputRefs.current[7]}
                     name='parentOccupation'
                     placeholder='Parent&#39;s Occupation'
                     type='text'
                     onChange={handleChange}
                     validation={'required|min:4'}
                  />
                  <InputField
                     ref={inputRefs.current[8]}
                     name='parentAddress'
                     placeholder='Parent&#39;s Address'
                     type='text'
                     onChange={handleChange}
                     validation={'required|min:4'}
                  />
                  <InputField
                     ref={inputRefs.current[9]}
                     name='parentPhone'
                     placeholder='Parent&#39;s Phone'
                     type='text'
                     onChange={handleChange}
                     validation={'required|min:4'}
                  />
                  <InputField
                     ref={inputRefs.current[10]}
                     name='parentEmail'
                     placeholder='Parent&#39;s Email'
                     type='email'
                     onChange={handleChange}
                     validation={'required|min:3'}
                  />
               </div>
               <div className='discussion'>
                  <InputField
                     ref={inputRefs.current[11]}
                     name='filledByWho'
                     placeholder='Form Filled by'
                     type='text'
                     onChange={handleChange}
                     validation={'required|min:3'}
                  />
               </div>
               <div className='submit-btn'>
                  <button type='submit'>Submit</button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default AdmissionForm;
