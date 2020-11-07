import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
   state = {
      openNav: false,
   };

   toggleNav = () => {
      this.setState({ openNav: !this.state.openNav });
   };

   closeNav = () => {
      this.setState({ openNav: !this.state.openNav });
   };

   render() {
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
                     <div
                        onClick={this.toggleNav}
                        className={
                           this.state.openNav ? 'burger close' : 'burger'
                        }
                     >
                        <div className='line-1'></div>
                        <div className='line-2'></div>
                        <div className='line-3'></div>
                     </div>
                     <Link to='/'>
                        <div className='logo'>
                           <h2>Monarch Educational</h2>
                           <h4>
                              <span className='text-secondary'>Foundation</span>
                           </h4>
                        </div>
                     </Link>

                     <div
                        className={
                           this.state.openNav ? 'nav-links open' : 'nav-links'
                        }
                     >
                        <div className='quick-contact'>
                           <h5>
                              <i className='fas fa-phone text-secondary'></i>
                              (0909) 870-9973
                           </h5>

                           <h5>
                              <i className='fas fa-envelope text-secondary'></i>
                              monarchedu@gmail.com
                           </h5>
                        </div>
                        <div className='nav-items'>
                           <ul>
                              <li className='nav-item-mobile'>
                                 <Link onClick={this.closeNav} to='/'>
                                    Home
                                 </Link>
                              </li>
                              <li>
                                 <Link onClick={this.closeNav} to='/about'>
                                    About
                                 </Link>
                              </li>
                              <li>
                                 <Link onClick={this.closeNav} to='/academics'>
                                    Academics
                                 </Link>
                              </li>
                              <li>
                                 <Link onClick={this.closeNav} to='/admission'>
                                    Admission
                                 </Link>
                              </li>
                              <li>
                                 <Link
                                    onClick={this.closeNav}
                                    to='/why-monarch'
                                 >
                                    Why Monarch
                                 </Link>
                              </li>
                              <li className='nav-item-mobile'>
                                 <Link onClick={this.closeNav} to='/calender'>
                                    Calender
                                 </Link>
                              </li>
                              <li className='nav-item-mobile'>
                                 <Link onClick={this.closeNav} to='/directions'>
                                    Directions
                                 </Link>
                              </li>
                              <li className='nav-item-mobile'>
                                 <Link onClick={this.closeNav} to='/map'>
                                    Map
                                 </Link>
                              </li>
                              <li className='nav-item-mobile'>
                                 <Link onClick={this.closeNav} to='/contact'>
                                    Contact Us
                                 </Link>
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
}
