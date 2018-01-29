import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
import List from './List';
import NewCard from './NewCard';


class KanbanBoard extends Component {
  render(){
    const RouteNewCard = () => {
      return (
        <NewCard cards={this.props.cards}
                 cardCallbacks={this.props.cardCallbacks}/>
      );
    };

    return (
      <div className="app">
        <Link to='/new' className="float-button">+</Link>

        <List id='todo' title="To Do" taskCallbacks={this.props.taskCallbacks}
          cardCallbacks={this.props.cardCallbacks}
          cards={ this.props.cards.filter((card) => card.status === "todo")} />
        <List id='in-progress' title="In Progress" taskCallbacks={this.props.taskCallbacks}
          cardCallbacks={this.props.cardCallbacks}
          cards={ this.props.cards.filter((card) => card.status === "in-progress")} />
        <List id='done' title='Done' taskCallbacks={this.props.taskCallbacks}
          cardCallbacks={this.props.cardCallbacks}
          cards={ this.props.cards.filter((card) => card.status === "done")} />
        <Switch>
          <Route path="/new" component={RouteNewCard}/>
        </Switch>
      </div>
    );
  }
}
KanbanBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object,
  cardCallbacks: PropTypes.object
};

export default DragDropContext(HTML5Backend)(KanbanBoard);
