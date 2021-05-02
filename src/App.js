import React from 'react'
import { Provider } from 'react-redux';

import './App.css';
import { AddTodoForm } from './Components/AddTodoForm';
import { TodoFilterStore } from './Components/TodoFilter';
import { TodoList, TodoListStore } from './Components/TodoList';
import store from './store';

function App() {
  return (
    <div className="App">
   <Provider store={store}>
   <TodoFilterStore/>
   <TodoListStore/>
   
   <AddTodoForm/>
   </Provider>
    </div>
  );
}

export default App;
