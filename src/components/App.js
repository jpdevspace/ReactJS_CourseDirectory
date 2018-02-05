import React, { Component } from 'react';
// Router 
import { BrowserRouter, Route } from 'react-router-dom';
// App components
import Header from './Header';
import Home from './Home';
import About from './About';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} /> 
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
