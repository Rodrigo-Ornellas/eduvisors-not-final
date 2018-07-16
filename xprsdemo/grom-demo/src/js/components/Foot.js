import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Paragraph from 'grommet/components/Paragraph';


class Foot extends Component {
  render() {
    return (

        <Footer justify='between'>
          <Box direction='row'
            align='center'
            pad={{"between": "medium"}}>
            <Paragraph margin='none'>
              © 2018 Eduvisors
            </Paragraph>
            <Menu direction='row'
              size='small'
              dropAlign={{"right": "right"}}>
              <Anchor href="/">
                Home
              </Anchor>
              <Anchor href='./test'>
                About
              </Anchor>
            </Menu>
          </Box>
        </Footer>
      )
  }
}

export default Foot;
