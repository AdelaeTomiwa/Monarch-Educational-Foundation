import React from 'react';

function AgeGroup() {
   return (
      <div className='age-group'>
         <div className='container'>
            <h2>Age Group</h2>
            <div className='boxes'>
               <div className='box'>
                  <h4>Creche</h4>
                  <h5>0 - 18 Month</h5>
               </div>

               <div className='box'>
                  <h4>Nursery One</h4>
                  <h5>2 Years</h5>
               </div>
               <div className='box'>
                  <h4>Nursery Two</h4>
                  <h5>3 Years</h5>
               </div>
               <div className='box'>
                  <h4>Primary One</h4>
                  <h5>4 Years</h5>
               </div>
               <div className='box'>
                  <h4>Primary Two</h4>
                  <h5>5 Years</h5>
               </div>
               <div className='box'>
                  <h4>Primary Three</h4>
                  <h5>6 Years</h5>
               </div>
               <div className='box'>
                  <h4>Primary Four</h4>
                  <h5>7 Years</h5>
               </div>
               <div className='box'>
                  <h4>Primary Five</h4>
                  <h5>8 Years</h5>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AgeGroup;
