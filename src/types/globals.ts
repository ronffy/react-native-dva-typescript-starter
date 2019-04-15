
import React  from 'react-native';

export interface BaseProps {
  children?: any;
  style?: React.StyleProp<any>;
  [props: string]: any;
}

import { State as AppState } from '../models/app';
import { State as DemoState } from '../models/demo';
import { DvaLoading } from './dva';

export type AppState = AppState;
export type DemoState = DemoState;

export interface WholeState {
  app: AppState;
  demo: DemoState;
  router: any;
  loading: DvaLoading;
}
