import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Paper} from 'material-ui';
import theme from './theme.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import './css/index.css';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <Paper style={{"height":"100%"}}>
      <App />
    </Paper>
  </MuiThemeProvider>,
  document.getElementById('root')
);
