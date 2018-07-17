import React, { Component } from 'react';
// import logo from '../logo.png';
// import '../styles/header.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Costs from './cost';
import Profile from './profile';
import Engine from './engine';
import Chart from './chart';
import Register from './form';
import ProfileCompletion from './profileCompletion';
import SchoolProf from './schoolProf';
import CostLiving from './cost_living';
import FieldStudy from './field_study';
import Selector from './selector';
import Snowfall from './snowfall';
import Weather from './weather';
// ==================================
// import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

// import { Menu } from 'grommet-icons';


class HeaderMenu extends Component {
  render() {
    return (

      // <div className="menu">
   <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1 className="App-title">Eduvisors</h1>
      <nav className="container">
          <ul>

            <li><Link to="/cost">Cost</Link></li>
            <li><Link to="/engine">Engine</Link></li>

            <li><Link to="/profileCompletion">ProfileCompletion</Link></li>
            <li><Link to="/cost_living">Cost Living</Link></li>
            <li><Link to="/field_study">Field Study</Link></li>

            <li><Link to="/weather/BC">Weather</Link></li>
            <li><Link to="/survey1">Survey</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>
      </nav>
    </header>
//     <Header>
//   <Title>
//     Sample Title
//   </Title>
//   <Box flex={true}
//     justify='end'
//     direction='row'
//     responsive={false}>
//     <Search inline={true}
//       fill={true}
//       size='medium'
//       placeHolder='Search'
//       dropAlign={{"right": "right"}} />
//     <Menu icon={<Actions />}
//       dropAlign={{"right": "right"}}>
//       <Anchor href='#'
//         className='active'>
//         First
//       </Anchor>
//       <Anchor href='#'>
//         Second
//       </Anchor>
//       <Anchor href='#'>
//         Third
//       </Anchor>
//     </Menu>
//   </Box>
// </Header>
// </div>
    );
  }
}

export default HeaderMenu;
