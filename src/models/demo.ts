import * as globalsService from '../services/globals'
import { commonExtend } from './common'
import { DvaModel } from '../types/dva';

export interface State {
  name: string;
  age: number;
}

const model: DvaModel<State> = {
  namespace: 'demo',
  state: {
    name: '',
    age: 0,
  },
  effects: {
    *saveText({ payload }, { call, put }) {
      const { name } = payload;
      const newName = yield call(globalsService.requestChangeText, {
        name,
      })
      yield put({
        type: 'updateState',
        payload: {
          name: newName
        }
      })
    },

  }
}

export default commonExtend(model);
