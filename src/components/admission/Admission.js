import React from 'react';
import Showcase from './Showcase';
import InfoOne from './InfoOne';
import AdmissionForm from './AdmissionForm';
import Footer from '../layout/Footer';

function Form() {
   return (
      <div className='admission'>
         <Showcase />
         <InfoOne />
         <AdmissionForm />
         <br />
         <Footer />
      </div>
   );
}

export default Form;
