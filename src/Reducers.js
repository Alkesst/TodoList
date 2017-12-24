import { 
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
  } from './Actions'
import { combineReducers } from 'redux'
const { SHOW_ALL } = VisibilityFilters
/*
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}
*/

/* REDUCED VERSION.
function todoApp(state = initialState, action){
  switch (action.type){
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter : action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      })
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      })
    default:
      return state
  }
}*/

/* The combineReducers is equivalent to the following code
function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}*/


function todos(state= [], action){
  switch (action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action){
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp