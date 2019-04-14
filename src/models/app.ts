import { createAction, NavigationActions, Storage } from '../utils'
import * as globalsService from '../services/globals'
import { commonExtend } from './common'
import { Dispatch } from 'redux';
import { DvaModel } from '../types/dva';

export interface State {
  login: boolean;
  loading: boolean;
  fetching: boolean;
}

const model: DvaModel<State> = {
  namespace: 'app',
  state: {
    login: false,
    loading: true,
    fetching: false,
  },
  effects: {
    *loadStorage(action, { call, put }) {
      const login = yield call(Storage.get, 'login', false)
      yield put(createAction('updateState')({ login, loading: false }))
    },
    *login({ payload }, { call, put }) {
      yield put(createAction('updateState')({ fetching: true }))
      const login = yield call(globalsService.login, payload)
      if (login) {
        yield put(NavigationActions.back())
      }
      yield put(createAction('updateState')({ login, fetching: false }))
      Storage.set('login', login)
    },
    *logout(action, { call, put }) {
      yield call(Storage.set, 'login', false)
      yield put(createAction('updateState')({ login: false }))
    },
  },
  subscriptions: {
    setup({ dispatch }: { dispatch: Dispatch }) {
      dispatch({ type: 'loadStorage' })
    },
  },
}

export default commonExtend(model);
