import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import passwordSlice from './reducers/passwordSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = persistReducer(
    persistConfig,
    combineReducers({
      passwords: passwordSlice.reducer,
    }),
);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

