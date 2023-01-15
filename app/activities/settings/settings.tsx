import React from 'react';
import {View, Text} from 'react-native';
import DefaultLayout from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import ApplicationInfo from '../../../app.json';

export default function Settings() {
  return (
    <DefaultLayout>
      <NavigationBar name="Settings" />

      <View>
        <Text>Settings</Text>
        <Text>App version: {ApplicationInfo.version}</Text>
      </View>
    </DefaultLayout>
  );
}
