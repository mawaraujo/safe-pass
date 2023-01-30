import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DefaultLayout from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import ApplicationInfo from '../../../app.json';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import settingsSlice from '../../store/reducers/settingsSlice';

export default function Settings() {
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);

  const toggleLocalAuthentication = () => {
    dispatch(
        settingsSlice.actions.toggleLocalAuthentication(),
    );
  };

  return (
    <DefaultLayout>
      <NavigationBar name="Settings" />

      <View>
        <Text>Settings</Text>
        <Text>App version: {ApplicationInfo.version}</Text>

        <TouchableOpacity onPress={toggleLocalAuthentication}>
          <Text>
            Toggle authentication {
              settings.enableLocalAuthentication ? '(Enabled)' : '(Disabled)'
            }
          </Text>
        </TouchableOpacity>
      </View>
    </DefaultLayout>
  );
}
