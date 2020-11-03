import React from 'react';
import Showcase from './Showcase';
import GeneralEnquires from './GeneralEnquires';
import ContactBox from './ContactBox';
import ConnectSocial from './../layout/ConnectSocial';
import GettingHere from './GettingHere';
import Footer from '../layout/Footer';

function Contact() {
   return (
      <div className='contact'>
         <Showcase />
         <GeneralEnquires />
         <ContactBox />
         <ConnectSocial />
         <GettingHere />
         <Footer />
      </div>
   );
}

export default Contact;
