import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Repos from './Repos';
import RepoDetails from './RepoDetails';

const RouteRepos = () => (
  <div>
    <h2>This is a RouteRepos page!</h2>
    <Switch>
      <Route exact path='/repos' component={Repos}/>
      <Route path='/repos/:repo_name' component={RepoDetails}/>
    </Switch>
  </div>
)

export default RouteRepos;
