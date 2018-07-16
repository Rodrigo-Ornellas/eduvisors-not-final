import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Footer from 'grommet/components/Footer';

<Footer justify='between'>
  <Title>
    <s />
     Eduvisors
  </Title>
  <Box direction='row'
    align='center'
    pad={{"between": "medium"}}>
    <Paragraph margin='none'>
      © 2018 Eduvisors
    </Paragraph>
    <Menu direction='row'
      size='small'
      dropAlign={{"right": "right"}}>
      <Anchor href='./home'>
        Home
      </Anchor>
      <Anchor href='./test'>
        About
      </Anchor>
    </Menu>
  </Box>
</Footer>
