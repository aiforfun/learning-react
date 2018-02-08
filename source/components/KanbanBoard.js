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
import EditCard from './EditCard';


class KanbanBoard extends Component {
  render(){
    const RouteNewCard = (props) => {
      return (
        <NewCard {...this.props} {...props}/>
      );
    };
    const RouteEditCard = (props) => {
      return (
        <EditCard {...this.props} {...props}/>
      );
    };

    return (
      <div className="app">
        <Link to='/new' className="float-button">+</Link>

        <List id='todo' title="To Do"
          cards={ this.props.cards.filter((card) => card.status === "todo")} />
        <List id='in-progress' title="In Progress"
          cards={ this.props.cards.filter((card) => card.status === "in-progress")} />
        <List id='done' title='Done'
          cards={ this.props.cards.filter((card) => card.status === "done")} />
        <Switch>
          <Route path="/new" component={RouteNewCard}/>
          <Route path="/edit/:card_id" component={RouteEditCard} />
        </Switch>
      </div>
    );
  }
}
KanbanBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default DragDropContext(HTML5Backend)(KanbanBoard);
