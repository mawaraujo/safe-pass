import React from 'react';
import Main from './activities/main/main';
import {store, persistor} from './store/store';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </ReduxProvider>
  );
}
