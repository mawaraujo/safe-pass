import React from 'react';
import { ScrollView } from 'react-native';
import DefaultLayout from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import settingsStyles from './settings.styles';
import SecuritySection from './sections/security/security';
import BackupSection from './sections/backup/backup';
import GeneralSection from './sections/general/general';
import { useTranslation } from 'react-i18next';
import Title from '../../components/title/title';
import SubTitle from '../../components/subTitle/subTitle';

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

        <SubTitle
          style={settingsStyles.sectionTitle}
          muted={false}>
          {t('Security').toString()}
        </SubTitle>

        <SecuritySection />

        <SubTitle
          style={settingsStyles.sectionTitle}
          muted={false}>
          {t('Backup').toString()}
        </SubTitle>

        <BackupSection />


        <SubTitle
          style={settingsStyles.sectionTitle}
          muted={false}>
          {t('General').toString()}
        </SubTitle>
        <GeneralSection />
      </ScrollView>
    </DefaultLayout>
  );
}
