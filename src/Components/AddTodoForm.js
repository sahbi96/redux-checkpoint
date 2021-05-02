import React, { useRef } from 'react'
import {useDispatch} from 'react-redux'
import { AddTodoAction } from '../store/todosActions'





export function AddTodoForm(){
  const dispatch = useDispatch()
  const input = useRef(null)
const handleSubmit = e =>{
e.preventDefault()
dispatch(AddTodoAction(input.current.value))
input.current.value = ''
input.current.focus()
}
return <form onSubmit = {handleSubmit}>
<input type ="text" placeholder="Tache"ref={input} />
<button>Add</button>
</form>
}