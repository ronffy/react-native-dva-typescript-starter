
import React  from 'react-native';

export interface BaseProps {
  children?: any;
  style?: React.StyleProp<any>;
  [props: string]: any;
}

import { State as GlobalsState, OwnAction as _GlobalsAction } from '../reducers/globals';

export interface WholeState {
  globals: GlobalsState;
}

export type GlobalsAction = _GlobalsAction;

