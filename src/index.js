import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './theme.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import { Provider } from 'react-redux';
import './css/index.css';

injectTapEventPlugin();

import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
