import { Dispatch, Action, ActionCreator } from 'redux';
import { requestTest } from '../services/globals';


// action 名称定义规范 filename + customname
export const GLOBALS_RENAME = 'GLOBALS_RENAME';
export const GLOBALS_ADDAGE = 'GLOBALS_ADDAGE';

export const addage: ActionCreator<Action> = (age: number) => ({
  type: GLOBALS_ADDAGE,
  payload: {
    age
  }
});

export const rename: ActionCreator<Action> = (name: string) => ({
  type: GLOBALS_RENAME,
  payload: {
    name
  }
});

export const fetchName = (name: string) => (dispatch: Dispatch) => 
  requestTest()
    .then(() => {
      dispatch(rename(name));
    })

    
  