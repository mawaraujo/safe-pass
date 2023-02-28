import React from 'react';
import { View } from 'react-native';
import Default from '../../../layout/default/default';
import NavigationBar from '../../../components/navigationBar/navigationBar';
import { useTranslation } from 'react-i18next';
import styles from './restore.styles';
import Title from '../../../components/title/title';
import SubTitle from '../../../components/subTitle/subTitle';

function Restore() {
  const { t } = useTranslation();

  return (
    <Default>
      <NavigationBar />

      <View style={styles.main}>
        <Title>
          {t('Restore backup').toString()}
        </Title>

        <SubTitle muted>
          {t('Choose how you want to restore your data').toString()}
        </SubTitle>
      </View>
    </Default>
  );
}

import RestoreFile from './restoreFile/restoreFile';
import RestoreChromeFile from './restoreChromeFile/restoreChromeFile';
import Text from '../../../components/text/text';

export default {
  Restore,
  RestoreFile,
  RestoreChromeFile,
};
