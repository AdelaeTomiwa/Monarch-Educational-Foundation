import React from 'react';
import HeadSchool from '../../images/head-school.jpg';

function HeadProfile() {
   return (
      <div className='head-profile'>
         <div className='container'>
            <div className='boxes'>
               <div className='head-profile-img'>
                  <img src={HeadSchool} alt='' />
                  <h4>Dr. Mrs. Akinteye</h4>
                  <small>Phd. Bsc Accounting</small>
               </div>
               <div className='head-profile-content'>
                  <h2>Head of Monarch Educational Foundation</h2>
                  <p>
                     At{' '}
                     <span className='text-primary'>
                        Monarch Educational Foundation
                     </span>
                     , our upmost responsibility is to ensure the growth and
                     success of our pupils, because, the early years of the
                     pupils (2-8) is the stage in their life where they can
                     assimilate and learn faster than any other time. It is
                     important we mould them in the best shape as possible so as
                     to be able to fulfill their potential from when they take
                     their baby steps through potty training to when they
                     gradually begin to develop a sense of self. As teachers, We
                     take a crucial part in this process by treating them as
                     individuals and introducing them to various activities
                     which are designed to aid this development process.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HeadProfile;
