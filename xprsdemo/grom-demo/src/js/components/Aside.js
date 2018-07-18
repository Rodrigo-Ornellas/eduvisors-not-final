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


            <Sidebar className="profile" colorIndex='light-1' size='10%'>
        <Header pad='medium'
          justify='between'>

        </Header>
        <Box
          justify='center'>
          <Menu primary={true}>
            <Profile />

          </Menu>
        </Box>

      </Sidebar>
      )
  }
}

export default Aside;
