import * as React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import store from './lib/redux';

import InboxScreen from './components/InboxScreen';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    );
  }
}

export default App;
