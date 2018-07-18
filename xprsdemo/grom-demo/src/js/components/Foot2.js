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
import SocialInstagramIcon from 'grommet/components/icons/base/SocialInstagram';
import SocialGooglePlusIcon from 'grommet/components/icons/base/SocialGooglePlus';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';



class Foot2 extends Component {
  render() {
    return (

        <Footer justify='between' colorIndex='neutral-3-a'>
              <Box direction='row'
                align='center'
                pad={{"between": "medium"}}>

                    <Menu direction='row'
                      size='small'
                      dropAlign={{"right": "right"}}
                      >
                      <Anchor href='#'>
                      About Us
                      </Anchor>
                      <Anchor href='#'>
                        Contact Us
                      </Anchor>
                      <Anchor href='#'>
                        Careers
                      </Anchor>
                    </Menu>
                    <Paragraph margin='none'>
                      © 2018 Eduvisors
                    </Paragraph>
                    <SocialFacebookIcon />
                    <SocialGooglePlusIcon />
                    <SocialInstagramIcon />
              </Box>
        </Footer>
      )
  }
}

export default Foot2;
