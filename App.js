import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import PageOne from './srcs/srcMain.js';
import PageTwo from './srcs/srcContent.js';
export default class App extends Component {
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          <Scene key="Home" component={PageTwo} title="Home" />
        </Scene>
      </Router>
    )
  }
}