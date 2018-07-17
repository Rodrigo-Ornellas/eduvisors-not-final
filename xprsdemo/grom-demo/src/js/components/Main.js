import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import logo from '../logo.png';
// import '../styles/App2.css';

import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Split from 'grommet/components/Split';

import NavSidebar from './NavSidebar';
import { navResponsive } from '../actions/nav';

import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Tasks from '../screens/Tasks';
import Task from '../screens/Task';
import NotFound from '../screens/NotFound';

import HeaderMenu from './header';
import MainContent from './mainorg';
import Snowfall from './snowfall';

import Foot2 from './Foot2';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {value:"BC"};
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  render() {
    return (
      <div className="App">

      <Router>

          <div className="main-content">

                <HeaderMenu />
                <MainContent />
                <Foot2 />

          </div>
       </Router>
      </div>
    );
  }
}


Main.defaultProps = {
  nav: {
    active: true, // start with nav active
    enabled: true, // start with nav disabled
    responsive: 'multiple'
  }
};

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    active: PropTypes.bool,
    enabled: PropTypes.bool,
    responsive: PropTypes.string
  })
};

const select = state => ({
  nav: state.nav
});

export default connect(select)(Main);
