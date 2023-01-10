import React from 'react';
import {View, Text} from 'react-native';
import DefaultLayout from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';

export default function Settings() {
  return (
    <DefaultLayout>
      <NavigationBar name="Settings" />

      <View>
        <Text>Settings</Text>
      </View>
    </DefaultLayout>
  );
}
