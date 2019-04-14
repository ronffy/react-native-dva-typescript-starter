/* eslint global window */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';


const middlewares = [
  thunk,
];
const enhancer = composeWithDevTools({
  // Options: https://github.com/jhen0409/react-native-debugger#options
})(applyMiddleware(...middlewares));

export default function configureStore(initialState?: any) {
  const store = createStore(reducer, initialState, enhancer);
  if (module && (module as any).hot) {
    (module as any).hot.accept(() => {
      store.replaceReducer(require('./reducers').default);
    });
  }
  return store;
}