import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';

// Importing Components
import Header from './components/layout/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import WhyMonarch from './components/why-monarch/WhyMonarch';
import Contact from './components/contact/Contact';
import News from './components/news/News';
import Events from './components/events/Events';
import Calender from './components/calender/Calender';
import Directions from './components/directions/Directions';
import Map from './components/map/Map';
import Academics from './components/academics/Academics';
import Admission from './components/admission/Admission';
import Gallery from './components/gallery/Gallery';
import Uniform from './components/uniform/Uniform';
import ScheduleContainer from './components/schedule/Schedule-container';

function App() {
   return (
      <Router>
         <React.Fragment>
            <Header />
            <Switch>
               <Route path='/' exact component={Home} />
               <Route path='/about' component={About} />
               <Route path='/why-monarch' component={WhyMonarch} />
               <Route path='/contact' component={Contact} />
               <Route path='/news-events/news' component={News} />
               <Route path='/news-events/events' component={Events} />
               <Route path='/calender' component={Calender} />
               <Route path='/directions' component={Directions} />
               <Route path='/map' component={Map} />
               <Route path='/academics' component={Academics} />
               <Route path='/admission' component={Admission} />
               <Route path='/gallery' component={Gallery} />
               <Route path='/uniform/information' component={Uniform} />
               <Route path='/schedule' component={ScheduleContainer} />
            </Switch>
         </React.Fragment>
      </Router>
   );
}

export default App;
