import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, Object.assign({}, action.todo)];
    case types.TOGGLE_TODO:
      const newArray = [...state];
      newArray[action.index].completed = !state[action.index].completed;
      return newArray;
    default:
      return state;
  }
};
