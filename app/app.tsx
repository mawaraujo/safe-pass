import './i18n';
import React from 'react';
import { store, persistor } from './store/store';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from './res';
import { Navigation } from './utils';
import GlobalAlert from './components/modal/alert/alert';
import Spinner from './components/spinner/spinner';
import UnlockRequest from './components/unlockRequest/unlockRequest';

import Main from './activities/main/main';
import CreatePassword from './activities/createPassword/createPassword';
import Settings from './activities/settings/settings';
import Preview from './activities/preview/preview';
import CreateTag from './activities/createTag/createTag';
import Tags from './activities/tags/tags';
import BackupCreate from './activities/backup/create/create';
import BackupRestore from './activities/backup/restore/restore';

const Stack = createNativeStackNavigator();

function BackupStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen
        name={Screens.Backup.Restore.Name}
        component={BackupRestore} />


      <Stack.Screen
        name={Screens.Backup.Create.Name}
        component={BackupCreate} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <UnlockRequest />
        <GlobalAlert />

        <NavigationContainer ref={Navigation.navigationRef}>
          <Stack.Navigator
            screenOptions={{
              animation: 'simple_push',
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
              name={Screens.Tags.Name}
              component={Tags} />

            <Stack.Screen
              name={Screens.CreateTag.Name}
              component={CreateTag} />

            <Stack.Screen
              name={Screens.Backup.Name}
              component={BackupStack} />
          </Stack.Navigator>

        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
}
