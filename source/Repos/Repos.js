import React, { Component } from 'react';
import 'whatwg-fetch';
import { Route, Link } from 'react-router-dom';
import RepoDetails from './RepoDetails';

class Repos extends Component {
  constructor(){
    super(...arguments);
    this.state = {
      repositories: []
    };
    console.log('Repos');
  }
  componentDidMount(){
    fetch('https://api.github.com/users/pro-react/repos')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({repositories:responseData});
    });
  }
  render() {
    let repos = this.state.repositories.map((repo) => (
      <li key={repo.id}>
        <Link to={"/repos/"+repo.name}>{repo.name}</Link>

      </li>
    ));
    return (
      <div>
        <h1>Github Repos</h1>
        <ul>
          {repos}
        </ul>
      </div>
    );
  }
}

export default Repos;
