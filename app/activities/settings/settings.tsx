import React from 'react';
import { ScrollView } from 'react-native';
import DefaultLayout from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import settingsStyles from './settings.styles';
import { useTranslation } from 'react-i18next';
import Title from '../../components/title/title';

import SecuritySection from './components/security/security';
import BackupSection from './components/backup/backup';
import InformationGeneral from './components/informationGeneral/informationGeneral';

export default function Settings() {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <NavigationBar />

      <ScrollView
        contentContainerStyle={settingsStyles.container}>

        <Title style={settingsStyles.title}>
          {t('Settings').toString()}
        </Title>

        <SecuritySection />
        <BackupSection />
        <InformationGeneral />
      </ScrollView>
    </DefaultLayout>
  );
}
