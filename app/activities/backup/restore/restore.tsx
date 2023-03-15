import React from 'react';
import { ScrollView, View } from 'react-native';
import Default from '../../../layout/default/default';
import NavigationBar from '../../../components/navigationBar/navigationBar';
import { useTranslation } from 'react-i18next';
import styles from './restore.styles';
import { Card } from '../../../components/card';
import { Item } from '../../../components/item';
import Text from '../../../components/text/text';
import { Navigation } from '../../../utils';
import { Screens } from '../../../res';

import RestoreFile from './restoreFile/restoreFile';
import RestoreChromeFile from './restoreChromeFile/restoreChromeFile';

function Restore() {
  const { t } = useTranslation();

  return (
    <Default>
      <NavigationBar />

      <View style={styles.main}>
        <Text size="3">
          {t('backup.restore.title').toString()}
        </Text>

        <Text
          style={styles.descriptionText}
          size="2"
          muted>

          {t('backup.restore.description').toString()}
        </Text>

        <ScrollView>
          <Card>
            <Item
              onPress={() => {
                Navigation.navigate(Screens.Backup.RestoreFile.Name);
              }}
              firstItem={true}
              title={t('backup.restore.actions.restoreFile')} />

            <Item
              onPress={() => {
                Navigation.navigate(Screens.Backup.RestoreChromeFile.Name);
              }}
              title={t('backup.restore.actions.restoreChromeFile')} />
          </Card>
        </ScrollView>
      </View>
    </Default>
  );
}

export default {
  Restore,
  RestoreFile,
  RestoreChromeFile,
};
