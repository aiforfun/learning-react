import React, { Component } from 'react';
import { render } from 'react-dom';

// first we import some components
//import { Router, Route } from 'react-router';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import About from './About';
import Home from './Home';
import RouteRepos from './RouteRepos';
import RepoDetails from './RepoDetails';

class App extends Component {
  constructor(){
    super(...arguments);
    console.log('App');
  }
  render() {
    return (
      <div>
        <header>App</header>
        <menu>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/repos">Repos</Link></li>
          </ul>
        </menu>
        <hr/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/repos' component={RouteRepos}/>
        </Switch>
      </div>
    );
  }
}

render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'));

//render(<App />, document.getElementById('root'));
