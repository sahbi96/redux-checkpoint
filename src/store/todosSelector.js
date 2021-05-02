import{createSelector} from 'reselect';
import {filterSelector} from './filterSelectors'




export const todosSelector = ({todos})=> todos

export const filteredTodoSelector = ({todos, filter}) =>{  
    
   
      if(filter === null){
  
    return todos

  }
  return todos.filter(todos =>todosSelector.completed === 
    filter)
}
