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
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
// import Actions from 'grommet/components/Actions';


class HeaderMenu extends Component {
  render() {
    return (

          <Header fixed={true}
            size='medium'>
            <Title>
              Eduvisors
            </Title>
            <Box flex={true}
              justify='end'
              direction='row'
              responsive={false}>
              <Menu icon={<Menu />}
                dropAlign={{"right": "right"}}>
                <Anchor href='/home'
                  className='active'>
                  Home
                </Anchor>
                <Anchor href='/survey1'>
                  Survey
                </Anchor>
                <Anchor href='/weather/BC'>
                  Weather
                </Anchor>
              </Menu>
            </Box>
          </Header>
    );
  }
}

export default HeaderMenu;
