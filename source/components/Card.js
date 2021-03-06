import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import CheckList from './CheckList';
import marked from 'marked';
import { DragSource, DropTarget } from 'react-dnd';
import constants from '../constants';
import {
  Link
} from 'react-router-dom'
import CardActionCreators from '../actions/CardActionCreators';


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
      id: props.id,
      status: props.status
    };
  },
  endDrag(props) {
    CardActionCreators.persistCardDrag(props);
  }
}

const cardDropSpec = {
  hover(props, monitor) {
    const draggedId = monitor.getItem().id;
    if(props.id !== draggedId){
      CardActionCreators.updateCardPosition(draggedId, props.id);
    }
  }
}

let collectDrag = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource()
  };
}

let collectDrop = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

class Card extends Component {
  toggleDetails() {
    CardActionCreators.toggleCardDetails(this.props.id);
  }
  render() {
    const { connectDragSource, connectDropTarget } = this.props;
    let cardDetails;
    if (this.props.showDetails !== false) {
      cardDetails = (
        <CSSTransition
          classNames="toggle"
          timeout={{ enter: 250, exit: 250 }}>
          <div className="card__details">
            <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
            <CheckList cardId={this.props.id}
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
    return connectDropTarget(connectDragSource(
      <div className="card">
        <div style={sideColor}/>
        <div className="card__edit"><Link to={'/edit/'+this.props.id}>&#9998;</Link></div>
        {/* &#9998; is the HTML entity for the utf-8 pencil character (✎) */}
        <div className={
          this.props.showDetails !== false? "card__title card__title--is-open" : "card__title"
        } onClick={this.toggleDetails.bind(this)}>{this.props.title}</div>
        <TransitionGroup>
          {cardDetails}
        </TransitionGroup>
      </div>
    ));
  }
}

Card.propTypes = {
  id: PropTypes.number,
  title: titlePropType,
  showDetails: PropTypes.bool,
  description: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};
const dragHighOrderCard = DragSource(constants.CARD, cardDragSpec, collectDrag)(Card);
const dragDropHighOrderCard = DropTarget(constants.CARD, cardDropSpec, collectDrop)(dragHighOrderCard);

export default dragDropHighOrderCard;
