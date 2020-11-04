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
import Academics from './components/academics/Academics';

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
               <Route path='/academics' component={Academics} />
            </Switch>
         </React.Fragment>
      </Router>
   );
}

export default App;
