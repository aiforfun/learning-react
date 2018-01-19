import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import CheckList from './CheckList';
import marked from 'marked';
import { DragSource } from 'react-dnd';
import constants from './constants';


let titlePropType = (props, propName, componentName) => {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value !== 'string' || value.length > 80) {
      return new Error(
        `${propName} in ${componentName}  is longer than 80 characters`
      );
    }
  }
}

const cardDragSpec = {
  beginDrag(props) {
    return {
      id: props.id
    };
  }
}

let collectDrag = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource()
  };
}

class Card extends Component {
  constructor() {
    super(...arguments);
     this.state = {
       showDetails: true
     };
  }
  toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
  }
  render() {
    const { connectDragSource } = this.props;
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <CSSTransition
          classNames="toggle"
          timeout={{ enter: 250, exit: 250 }}>
          <div className="card__details">
            <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
            <CheckList cardId={this.props.id}
              taskCallbacks={this.props.taskCallbacks}
              tasks={this.props.tasks} />
          </div>
        </CSSTransition>
      );
    }
    let sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    }
    return connectDragSource(
      <div className="card">
        <div style={sideColor}/>
        <div className={
          this.state.showDetails? "card__title card__title--is-open" : "card__title"
        } onClick={this.toggleDetails.bind(this)}>{this.props.title}</div>
        <TransitionGroup>
          {cardDetails}
        </TransitionGroup>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number,
  title: titlePropType,
  description: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object,
  cardCallbacks: PropTypes.object,
  connectDragSource: PropTypes.func.isRequired
};

export default DragSource(constants.CARD, cardDragSpec, collectDrag)(Card);
