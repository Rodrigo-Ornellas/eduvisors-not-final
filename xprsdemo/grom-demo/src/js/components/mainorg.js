import React, { Component } from 'react';
// import '../styles/main.css';
// import 'grommet/scss/vanilla/index.css';

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

import Sidebar from 'grommet/components/Sidebar';
import Footer from 'grommet/components/Footer';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';


class MainContent extends Component {


  render() {
    return (
      <div className="wrapper" >

        {/* <Split separator={false}> */}

<Aside />
  <Article scrollStep={true}
  controls={false}>

  <Section pad='small'
    justify='center'
    align='center'
    >
    <Headline margin='none'>
      Section 1
    </Headline>
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
  </Section>
  <Section pad='large'
    justify='center'
    align='center'
    full='vertical'
    colorIndex='grey-4'>
    <Headline margin='none'>
      Section 2
    </Headline>
  </Section>
  <Section pad='large'
    justify='center'
    align='center'
  >
    <Headline margin='none'>
      Section 3

    </Headline>
  </Section>
  <Section pad='large'
    justify='center'
    align='center'

    colorIndex='grey-4'>
    <Headline margin='none'>
      Section 4
    </Headline>
  </Section>
  <Section pad='large'
    justify='center'
    align='center'
    >
    <Headline margin='none'>
      Section 5
    </Headline>
  </Section>
</Article>




      {/* </Split> */}




      </div>
    );
  }
}

export default MainContent;
