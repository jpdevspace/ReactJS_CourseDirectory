import React, { Component } from 'react';
// Router 
import { BrowserRouter, Route } from 'react-router-dom';
// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Teachers from './Teachers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} /> 
          <Route path="/about" render={ () => <About title="About" /> } />
          <Route path="/teachers" component={Teachers} />
          <Route path="/courses" component={Courses} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
