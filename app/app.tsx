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

import Main from './activities/main/main';
import AddPasssword from './activities/addPassword/addPassword';
import Settings from './activities/settings/settings';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={Navigation.navigationRef}>

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
              component={Main}
              name={Screens.main.name} />

            <Tab.Screen
              component={AddPasssword}
              name={Screens.addPassword.name} />

            <Tab.Screen
              component={Settings}
              name={Screens.settings.name} />
          </Tab.Navigator>

        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
}
