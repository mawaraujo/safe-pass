import React from 'react';
import {store, persistor} from './store/store';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors, Screens} from './res';
import Icon from 'react-native-vector-icons/Ionicons';
import {Navigation} from './utils';
import GlobalToast from './components/toast/toast';
import Spinner from './components/spinner/spinner';

import Main from './activities/main/main';
import CreatePassword from './activities/createPassword/createPassword';
import Settings from './activities/settings/settings';
import Preview from './activities/preview/preview';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <GlobalToast />

        <NavigationContainer
          ref={Navigation.navigationRef}>

          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarShowLabel: false,
              headerShown: false,
              tabBarActiveTintColor: Colors.System.Brand,
              tabBarIcon: ({color, size}) => (
                <Icon
                  name={Navigation.getIcon(route.name)}
                  color={color}
                  size={size} />
              ),
            })}>

            <Tab.Screen
              options={{
                unmountOnBlur: true,
              }}
              component={Main}
              name={Screens.main.name} />

            <Tab.Screen
              options={{
                unmountOnBlur: true,
              }}
              component={CreatePassword}
              name={Screens.createPassword.name} />

            <Tab.Screen
              component={Settings}
              name={Screens.settings.name} />

            <Tab.Screen
              options={{
                tabBarItemStyle: {display: 'none'},
                tabBarIcon: () => null,
              }}
              component={Preview}
              name={Screens.preview.name} />
          </Tab.Navigator>

        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
}
