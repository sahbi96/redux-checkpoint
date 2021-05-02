
let id = 7;
const initialState = [
  {
    id: 1,
    title: "Cook something healthy",
    completed: false,
  },
  {
    id: 2,
    title: "Go to shop",
    completed: false,
  },
  {
    id: 3,
    title: "Go to  Gym",
    completed: false,
  },
  {
    id: 4,
    title: "Take a shower",
    completed: false,
  },
  {
    id: 5,
    title: "Eat something healthy",
    completed: false,
  },
  {
    id: 6,
    title: "Listen to music",
    completed: false,
  },
  {
    id: 7,
    title: "Watch a movie",
    completed: false,
  },

];

 export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
 export const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION";
 export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";





export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
     
    return [...state, { id: ++id, completed: false, ...action.payload }];
    case UPDATE_TODO_ACTION:
      return state.map(todo =>{
        if(todo.id===action.payload.id){
          return{...todo, ...action.payload}
        }else{
          return todo   
        }
      })
     case DELETE_TODO_ACTION:
    return state.filter(todo =>todo.id !== action.payload)
    default:

      return state;
  }
}