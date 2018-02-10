import React, { Component} from 'react';
import PropTypes from 'prop-types';
import CardForm from './CardForm';
import CardStore from '../stores/CardStore';
import CardActionCreators from '../actions/CardActionCreators';
import DraftStore from '../stores/DraftStore';
import {Container} from 'flux/utils';

class EditCard extends Component {
  componentWillMount(){
    CardActionCreators.createDraft(CardStore.getCard(this.props.match.params.card_id));
  }

  handleChange(field, value){
    CardActionCreators.updateDraft(field, value);
  }

  handleSubmit(e){
    e.preventDefault();
    let card = CardStore.getCard(parseInt(this.props.match.params.card_id));
    CardActionCreators.updateCard(card,
      this.state.draft);
    this.props.history.push('/');
  }

  handleClose(e){
    this.props.history.push('/');
  }

  render(){
    return (
      <CardForm draftCard={this.state.draft}
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

EditCard.getStores = () => ([DraftStore]);
EditCard.calculateState = (prevState) => ({
  draft: DraftStore.getState()
});

export default Container.create(EditCard);
