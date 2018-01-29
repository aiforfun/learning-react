import React from 'react';
import { render } from 'react-dom';
import KanbanBoardContainer from './KanbanBoardContainer';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

render((
  <BrowserRouter>
    <Route path="/" component={KanbanBoardContainer}/>
  </BrowserRouter>)
  , document.getElementById('root'));

//render(<KanbanBoardContainer />, document.getElementById('root'));
