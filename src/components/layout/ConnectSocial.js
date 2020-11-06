import React from 'react';

function ConnectSocial() {
   return (
      <div className='connect-social'>
         <div className='container'>
            <h3>Connect With us on Social Media</h3>
            <div className='boxes'>
               <a target='_blank' href='https://facebook.com/adelae.tomiwa'>
                  <div className='facebook-div'>
                     <i className='fab fa-facebook'></i>
                     <h4>Facebook</h4>
                  </div>
               </a>
               <a target='_blank' href='https://twitter.com/TheTomMedia'>
                  <div className='twitter-div'>
                     <i className='fab fa-twitter'></i>
                     <h4>Twitter</h4>
                  </div>
               </a>
               <a target='_blank' href='https://instagram.com/the_tom_media'>
                  <div className='instagram-div'>
                     <i className='fab fa-instagram'></i>
                     <h4>Instagram</h4>
                  </div>
               </a>
            </div>
            <div className='connect-details'>
               <h4>Contact Us</h4>
               <h5>Thinking of Applying to Monarch?</h5>
               <p>
                  <span className='text-primary'>School Phone</span>: (0909)
                  870-9973
               </p>
               <p>
                  <span className='text-primary'>Email Address</span>:
                  monarchedu@gmail.com
               </p>
            </div>
         </div>
      </div>
   );
}

export default ConnectSocial;
