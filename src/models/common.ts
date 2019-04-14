import modelExtend from 'dva-model-extend'
import { DvaModel, ReduxAction } from '../types/dva';

interface CommonState {
  [props: string]: any;
}

const commonModel = {
  reducers: {
    updateState(state: CommonState, { payload }: ReduxAction) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

const commonExtend = <State>(model: DvaModel<State>) => modelExtend(commonModel, model)

export {
  commonModel,
  commonExtend,
}