import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';

import Profile from './profile.js'



class Aside extends Component {
  render() {
    return (


            <Sidebar className="profile" colorIndex='neutral-1'>
        <Header pad='medium'
          justify='between'>
          <Title>
            Title
          </Title>
        </Header>
        <Box flex='grow'
          justify='start'>
          <Menu primary={true}>
            <Profile />

          </Menu>
        </Box>

      </Sidebar>
      )
  }
}

export default Aside;
