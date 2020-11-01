import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <header>
         <div className='top-nav'>
            <div className='container'>
               <ul>
                  <li>
                     <Link to='/calender'>
                        <small>Calender</small>
                     </Link>
                  </li>
                  <li>
                     <Link to='/contact'>
                        <small>Contact Us</small>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
         <nav>
            <div className='container'>
               <div className='nav'>
                  <div className='logo'>
                     <h2>Monarch Educational</h2>
                     <h4>Foundation</h4>
                  </div>
                  <div className='nav-links'>
                     <div>
                        <h5>
                           <i className='fas fa-phone'></i>
                           (0909) 870-9973
                        </h5>
                        <div>
                           <i className='fas fa-search'></i>
                           <input
                              type='text'
                              placeholder='Search'
                              className='search'
                           />
                        </div>
                     </div>
                     <div>
                        <ul>
                           <li>
                              <Link to='/about'>About Monarch</Link>
                           </li>
                           <li>
                              <Link to='admissions'>Admissions</Link>
                           </li>
                           <li>
                              <Link to='academics'>Academics</Link>
                           </li>
                           <li>
                              <Link to='why-monarch'>Why Monarch</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   );
}

export default Header;