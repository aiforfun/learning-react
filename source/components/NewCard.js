import React, { Component} from 'react';
import PropTypes from 'prop-types';
import CardForm from './CardForm';
import CardActionCreators from '../actions/CardActionCreators';


class NewCard extends Component{
  constructor(){
    super(...arguments);
    this.state = {
      id: Date.now(),
      title: '',
      description: '',
      status: 'todo',
      color:'#c9c9c9',
      tasks: []
    };
  }

  componentWillMount(){
  }

  handleChange(field, value){
    this.setState({[field]: value});
  }

  handleSubmit(e){
    e.preventDefault();
    CardActionCreators.addCard(this.state);
    this.props.history.push('/');
  }

  handleClose(e){
    this.props.history.push('/');
  }

  render(){
    return (
      <CardForm draftCard={this.state}
                buttonLabel="Create Card"
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleClose={this.handleClose.bind(this)} />
    );
  }
}

NewCard.propTypes = {
  props: PropTypes.object
};

export default NewCard;