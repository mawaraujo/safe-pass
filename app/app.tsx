import React from 'react';
import {store, persistor} from './store/store';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from './res';
import {Navigation} from './utils';
import GlobalToast from './components/toast/toast';
import Spinner from './components/spinner/spinner';
import Bootstrapper from './components/bootstrapper/bootstrapper';

import Main from './activities/main/main';
import CreatePassword from './activities/createPassword/createPassword';
import Settings from './activities/settings/settings';
import Preview from './activities/preview/preview';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <Bootstrapper />
        <GlobalToast />

        <NavigationContainer ref={Navigation.navigationRef}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>

            <Stack.Screen
              component={Main}
              name={Screens.main.name} />

            <Stack.Screen
              component={CreatePassword}
              name={Screens.createPassword.name} />

            <Stack.Screen
              component={Settings}
              name={Screens.settings.name} />

            <Stack.Screen
              component={Preview}
              name={Screens.preview.name} />
          </Stack.Navigator>

        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
}
