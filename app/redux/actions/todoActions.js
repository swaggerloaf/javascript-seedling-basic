import * as types from './actionTypes';
import { getAllTodos } from '../../api/todoApi';

// action creators

export function addTodo(todo) {
  return { type: types.ADD_TODO, todo };
}

export function toggleTodo(index) {
  return { type: types.ADD_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: types.SET_VISIBILITY_FILTER, filter };
}

export function loadTodosSuccess(todos) {
  return { type: types.LOAD_TODOS_SUCCESS, todos };
}

// thunks
export function loadTodos() {
  return dispatch => {
    getAllTodos()
      .then(res => res.json())
      .then(parsedRes => dispatch(loadTodosSuccess(parsedRes)))
      .catch(error => console.warn(error));
  };
}
