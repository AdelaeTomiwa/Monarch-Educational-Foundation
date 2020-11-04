import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
   return (
      <footer>
         <div className='container'>
            <div className='footer'>
               <div className='first-half'>
                  <div>
                     <div className='logo'>
                        <h2>Monarch Educational</h2>
                        <h4>Foundation</h4>
                     </div>

                     <ul>
                        <li>50 St, Orita Challenge</li>
                        <li>Ibadan, Oyo State, Nigeria</li>
                        <li>
                           <Link to='/directions'>
                              Direction <i className='fas fa-chevron-right'></i>
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className='second-child'>
                     <ul>
                        <li>
                           <span className='text-primary'>School Office</span>:
                           (0909) 870-9973, (0815) 742-5111
                        </li>
                        <li>
                           <span className='text-primary'>Email Address</span>:
                           monarchedu@gmail.com
                        </li>
                        <li>
                           <Link to='/contact'>
                              Contact Us{' '}
                              <i className='fas fa-chevron-right'></i>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className='second-half'>
                  <div>
                     <ul>
                        <li>
                           <Link to='/about'>About Monarch</Link>
                        </li>
                        <li>
                           <Link to='/academics'>Academics</Link>
                        </li>
                        <li>
                           <Link to='/why-monarch'>Why Monarch</Link>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <ul>
                        <li>
                           <Link to='/calender'>Calender</Link>
                        </li>
                        <li>
                           <Link to='/uniform/information'>
                              Uniform Information
                           </Link>
                        </li>
                        <li className='social'>
                           <Link to='https://facebook.com/animefrida'>
                              Facebook
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className='main-footer'>
            &copy; Monarch Educational Foundation 2020
         </div>
      </footer>
   );
}

export default Footer;
