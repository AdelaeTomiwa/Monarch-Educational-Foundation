import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';

// Importing Components
import Header from './components/layout/Header';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
   return (
      <Router>
         <React.Fragment>
            <Header />
            <Switch>
               <Route path='/' exact component={Home} />
               <Route path='/about' component={About} />
            </Switch>
         </React.Fragment>
      </Router>
   );
}

export default App;
