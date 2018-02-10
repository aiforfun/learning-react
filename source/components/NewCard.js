import React, { Component} from 'react';
import PropTypes from 'prop-types';
import CardForm from './CardForm';
import CardActionCreators from '../actions/CardActionCreators';
import DraftStore from '../stores/DraftStore';
import {Container} from 'flux/utils';


class NewCard extends Component{
  componentWillMount(){
    CardActionCreators.createDraft();
  }

  handleChange(field, value){
    CardActionCreators.updateDraft(field, value);
  }

  handleSubmit(e){
    e.preventDefault();
    CardActionCreators.addCard(this.state.draft);
    this.props.history.push('/');
  }

  handleClose(e){
    this.props.history.push('/');
  }

  render(){
    return (
      <CardForm draftCard={this.state.draft}
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

NewCard.getStores = () => ([DraftStore]);
NewCard.calculateState = (prevState) => ({
  draft: DraftStore.getState()
});

export default Container.create(NewCard);