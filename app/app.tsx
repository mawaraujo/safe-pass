import React from 'react';
import { store, persistor } from './store/store';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from './res';
import { Navigation } from './utils';
import GlobalToast from './components/toast/toast';
import Spinner from './components/spinner/spinner';
import UnlockRequest from './components/unlockRequest/unlockRequest';

import Main from './activities/main/main';
import CreatePassword from './activities/createPassword/createPassword';
import Settings from './activities/settings/settings';
import Preview from './activities/preview/preview';
import CreateBackup from './activities/createBackup/createBackup';
import RestoreBackup from './activities/restoreBackup/restoreBackup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <UnlockRequest />
        <GlobalToast />

        <NavigationContainer ref={Navigation.navigationRef}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>

            <Stack.Screen
              component={Main}
              name={Screens.Main.Name} />

            <Stack.Screen
              component={CreatePassword}
              name={Screens.CreatePassword.Name} />

            <Stack.Screen
              component={Settings}
              name={Screens.Settings.Name} />

            <Stack.Screen
              component={Preview}
              name={Screens.Preview.Name} />

            <Stack.Screen
              name={Screens.RestoreBackup.name}
              component={RestoreBackup} />

            <Stack.Screen
              name={Screens.CreateBackup.name}
              component={CreateBackup} />
          </Stack.Navigator>

        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
}
