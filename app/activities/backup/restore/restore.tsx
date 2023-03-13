import React from 'react';
import { View } from 'react-native';
import Default from '../../../layout/default/default';
import NavigationBar from '../../../components/navigationBar/navigationBar';
import { useTranslation } from 'react-i18next';
import styles from './restore.styles';
import Card from '../../../components/card/card';
import { Item } from '../../../components/item';

function Restore() {
  const { t } = useTranslation();

  return (
    <Default>
      <NavigationBar />

      <View style={styles.main}>
        <Text size="3">
          {t('Restore backup').toString()}
        </Text>

        <Text
          style={styles.descriptionText}
          size="2"
          muted>

          {t('Choose how you want to restore your data').toString()}
        </Text>

        <Card>
          <Item
            firstItem={true}
            title="Restore from file" />
        </Card>

        <Card>
          <Item
            firstItem={true}
            title="Restore from Chrome File" />
        </Card>
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
