import React, { Component } from 'react';
// import '../styles/main.css';

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
import Survey from './survey';
import Home from './home';
import Survey1 from './survey1';
import Survey2 from './survey2';
import Survey3 from './survey3';
import Survey4 from './survey4';
import Aside from './Aside';

// ===============================
import Section from 'grommet/components/Section';
import Sidebar from 'grommet/components/Sidebar';
import Footer from 'grommet/components/Footer';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';


class MainContent extends Component {


  render() {
    return (
      <div className="wrapper">

        <Split separator={false}>
          <Box colorIndex='neutral-1'
            justify='center'
            align='center'
            pad='small'>
                        <Aside />
          </Box>
          <Box colorIndex='neutral-0'
            justify='center'
            align='center'
            pad='large'>
                <Switch>
                      <Route path="/chart" component={Chart} />
                      <Route path="/cost" component={Costs} />
                      <Route path="/engine" component={Engine} />
                      <Route path="/form" component={Register} />
                      <Route path="/profileCompletion" component={ProfileCompletion} />
                      <Route path="/cost_living" component={CostLiving} />
                      <Route path="/snowfall/:province/:type" component={Snowfall} />
                      <Route path="/weather/:province" component={Weather} />
                      <Route path="/survey" component={Survey} />
                      <Route path="/schoolProf/:schoolID" component={SchoolProf} />
                      <Route path="/home" component={Home} />
                      <Route path="/survey1" component={Survey1} />
                      <Route path="/survey2" component={Survey2} />
                      <Route path="/survey3" component={Survey3} />
                      <Route path="/survey4" component={Survey4} />
                </Switch>
          </Box>
      </Split>




      </div>
    );
  }
}

export default MainContent;
