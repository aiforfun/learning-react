import React, { Component} from 'react';
import PropTypes from 'prop-types';
import CardForm from './CardForm';
import CardStore from '../stores/CardStore';
import CardActionCreators from '../actions/CardActionCreators';

class EditCard extends Component {
  componentWillMount(){
    let card = CardStore.getCard(parseInt(this.props.match.params.card_id));
    this.setState({...card});
  }

  handleChange(field, value){
    this.setState({[field]: value});
  }

  handleSubmit(e){
    e.preventDefault();
    let card = CardStore.getCard(parseInt(this.props.match.params.card_id));
    CardActionCreators.updateCard(card,
      this.state);
    this.props.history.push('/');
  }

  handleClose(e){
    this.props.history.push('/');
  }

  render(){
    return (
      <CardForm draftCard={this.state}
                buttonLabel="Edit Card"
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleClose={this.handleClose.bind(this)} />
    );
  }

}

EditCard.propTypes = {
  props: PropTypes.object
}

export default EditCard;