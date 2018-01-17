import React from 'react';
import { render } from 'react-dom';
import KanbanBoard from './KanbanBoard';

//import ContactsApp from './contactApp/App';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the **whole** book",
    color: '#BD8D31',
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code !",
    description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react) ",
    color: '#3A7E28',
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false }
      ]
    },
    {
      id: 3,
      title: "Component Composition Strategies and Best Practices",
      description: "This section will cover strategies and best practices for creating React applications by composing components. You will discuss how to achieve state management, data fetching, and control over user interactions in a structured and organized way.",
      color: '#BD8D31',
      status: "in-progress",
      tasks: []
    },
  ];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
