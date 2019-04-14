import React from 'react'

import dva from './src/utils/dva'
import Router, { routerMiddleware, routerReducer } from './src/router'
import appModel from './src/models/app'

const app = dva({
  initialState: {},
  models: [appModel],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e: any) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />);

export default App
