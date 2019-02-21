import '@babel/polyfill';
import * as React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import * as styles from './styles';

import store from './redux/configStore.js';

import TodoContainer from './components/TodoContainer.jsx';

ReactDom.render(
  <Provider store={store}>
    <TodoContainer />
  </Provider>,
  document.getElementById('mountNode')
);
