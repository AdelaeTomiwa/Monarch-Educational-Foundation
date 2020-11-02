import React from 'react';
import { Link } from 'react-router-dom';

function ConnectSocial() {
   return (
      <div className='connect-social'>
         <div className='container'>
            <h3>Connect With us on Social Media</h3>
            <div className='boxes'>
               <Link to='https://facebook.com/monarchedu'>
                  <div className='facebook-div'>
                     <h4>
                        <i className='fab fa-facebook'></i> Facebook
                     </h4>
                  </div>
               </Link>
               <Link to='https://twitter.com/monarchedu'>
                  <div className='twitter-div'>
                     <h4>
                        <i className='fab fa-twitter'></i> Twitter
                     </h4>
                  </div>
               </Link>
               <Link to='https://instagram.com/monarchedu'>
                  <div className='instagram-div'>
                     <h4>
                        <i className='fab fa-instagram'></i> Instagram
                     </h4>
                  </div>
               </Link>
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
