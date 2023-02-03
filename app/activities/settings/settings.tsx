import React from 'react';
import {Text, ScrollView} from 'react-native';
import DefaultLayout from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import ApplicationInfo from '../../../app.json';
import settingsStyles from './settings.styles';
import SecuritySection from './sections/security/security';

export default function Settings() {
  return (
    <DefaultLayout>
      <NavigationBar name="Settings" />

      <ScrollView
        contentContainerStyle={settingsStyles.container}>

        <Text style={settingsStyles.sectionTitle}>Security</Text>
        <SecuritySection />

        <Text
          style={settingsStyles.appVersion}>
          Version {ApplicationInfo.version}
        </Text>
      </ScrollView>
    </DefaultLayout>
  );
}
