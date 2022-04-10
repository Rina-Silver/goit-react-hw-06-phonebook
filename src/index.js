import React from 'react';
import ReactDOM from 'react-dom';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import App from 'App';
import 'modern-normalize/modern-normalize.css';
import { PersistGate } from 'redux-persist/integration/react';
import ReactLoading from 'react-loading';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={
        <ReactLoading
          type={'balls'}
          color={'#000000'}
          height={'20%'}
          width={'20%'}
        />
      }
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
