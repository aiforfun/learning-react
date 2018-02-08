import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
// Polyfills
import 'whatwg-fetch'; // Need for browsers do not support fetch
import 'babel-polyfill'; // Need for browser do not support findIndex
import {
  Route
} from 'react-router-dom'

import {Container} from 'flux/utils';
import CardActionCreators from '../actions/CardActionCreators';
import CardStore from '../stores/CardStore';

class KanbanBoardContainer extends Component {
  constructor(){
    super(...arguments);
    this.state = {
      cards:[],
    };
  }

  componentDidMount(){
    CardActionCreators.fetchCards();
  }

  render() {
    const RouteKanbanBoard = () => {
      return (
        <KanbanBoard cards={this.state.cards}/>
      );
    };

    return (
      <Route path="/" render={RouteKanbanBoard} />
    )
  }
}

KanbanBoardContainer.getStores = () => ([CardStore]);
KanbanBoardContainer.calculateState = (prevState) => ({
  cards: CardStore.getState()
});
export default Container.create(KanbanBoardContainer);

//export default KanbanBoardContainer;
