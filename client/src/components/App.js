import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Cart from './Cart';

class App extends Component {
    render() {
      return (
          <BrowserRouter>
            <div className="RouterDiv">
              <Route exact path="/" component={Cart} />
            </div>
          </BrowserRouter>
      );
    }
  }
  export default App;
