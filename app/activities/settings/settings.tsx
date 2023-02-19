import React from 'react';
import { Text, ScrollView } from 'react-native';
import DefaultLayout from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import settingsStyles from './settings.styles';
import SecuritySection from './sections/security/security';
import BackupSection from './sections/backup/backup';
import InformationSection from './sections/information/information';
import LanguageSection from './sections/language/language';
import { useTranslation } from 'react-i18next';

export default function Settings() {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <NavigationBar name={t('Settings') ?? 'Settings'} />

      <ScrollView
        contentContainerStyle={settingsStyles.container}>

        <LanguageSection />

        <Text style={settingsStyles.sectionTitle}>
          {t('Security')}
        </Text>
        <SecuritySection />

        <Text style={settingsStyles.sectionTitle}>
          {t('Backup')}
        </Text>
        <BackupSection />

        <Text style={settingsStyles.sectionTitle}>
          {t('Information')}
        </Text>
        <InformationSection />
      </ScrollView>
    </DefaultLayout>
  );
}
