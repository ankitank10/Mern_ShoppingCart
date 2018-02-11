import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
//import Landing from "./Landing";
import { connect } from "react-redux";
import * as actions from "../actions";
const Landing = () => <h1>Landing</h1>;
const Surveys = () => <h1>Dashboard</h1>;
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            {/* <Route path="/surveys" component={Surveys} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(null, actions)(App);
