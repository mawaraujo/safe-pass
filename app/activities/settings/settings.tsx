import React from 'react';
import { Text, ScrollView } from 'react-native';
import DefaultLayout from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import settingsStyles from './settings.styles';
import SecuritySection from './sections/security/security';
import BackupSection from './sections/backup/backup';
import InformationSection from './sections/information/information';
import LanguageSection from './sections/language/language';

export default function Settings() {
  return (
    <DefaultLayout>
      <NavigationBar name="Settings" />

      <ScrollView
        contentContainerStyle={settingsStyles.container}>

        <LanguageSection />

        <Text style={settingsStyles.sectionTitle}>
          Security
        </Text>
        <SecuritySection />

        <Text style={settingsStyles.sectionTitle}>
          Backup
        </Text>
        <BackupSection />

        <Text style={settingsStyles.sectionTitle}>
          Information
        </Text>
        <InformationSection />
      </ScrollView>
    </DefaultLayout>
  );
}
