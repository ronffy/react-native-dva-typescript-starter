import { Action } from 'redux';
import { GLOBALS_RENAME, GLOBALS_ADDAGE } from '../actions/globals';

export interface State {
  age: number;
  name: string;
}

export interface OwnAction extends Action {
  payload: {
    name: string;
    age: number;
  }
}

const initialState: State = {
  name: '',
  age: 0,
}

export default (state: State = initialState, action: OwnAction) => {
  const { type, payload } = action;
  switch (type) {
    case GLOBALS_RENAME:
      return {
        ...state,
        name: payload.name
      }
    case GLOBALS_ADDAGE:
      return {
        ...state,
        age: payload.age
      }
    default:
    return state;
  }
};