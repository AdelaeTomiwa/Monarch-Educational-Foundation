import React from 'react';
import Showcase from './Showcase';
import ScheduleForm from './ScheduleForm';
import Footer from '../layout/Footer';

function Schedule() {
   return (
      <div className='schedule-container'>
         <Showcase />
         <ScheduleForm />
         <br />
         <Footer />
      </div>
   );
}

export default Schedule;
