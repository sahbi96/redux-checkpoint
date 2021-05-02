import React, { useCallback } from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import { deleteTodoAction, toggleTodoAction } from '../store/todosActions'
import { UPDATE_TODO_ACTION } from '../store/todosReducer'
import { filteredTodoSelector, todosSelector } from '../store/todosSelector'

function TodoItem({todo, onToggle,onDelete}){
  
return <li>
  <label htmlFor="">
<input type="checkbox" checked={todo.completed} onChange={()=>
onToggle(todo)}/>
{todo.title}
<button onClick={()=> onDelete (todo)}>X</button>



  </label>
</li>

}



export function TodoList({todos, onToggle,onDelete}){
return <ul>
  {todos.map(todo=> <TodoItem todo={todo} onToggle={onToggle}key={todo.id} onDelete={onDelete}/>)}
</ul>
 
  
}
export function TodoListStore(){
  const todos = useSelector(filteredTodoSelector)
  const dispatch = useDispatch()
  const onToggle = useCallback(todo =>{
    dispatch(toggleTodoAction(todo))
  
  },[])
  const onDelete = useCallback(todo =>{
    dispatch(deleteTodoAction(todo))
  },[])
  return <TodoList todos = {todos} onToggle={onToggle} onDelete={onDelete}/>
}
//  export const TodoListStore = connect(
// (state) =>({
//   todos: todosSelector(state)
// }),
// (dispatch) =>({
//   onToggle: todo => dispatch(toggleTodoAction(todo))
//   })

// )(TodoList)