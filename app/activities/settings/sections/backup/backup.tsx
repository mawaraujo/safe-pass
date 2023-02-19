import React from 'react';
import Card from '../../../../components/card/card';
import Item from '../../components/item/item';
import { Navigation } from '../../../../utils';
import { Screens } from '../../../../res';
import { useTranslation } from 'react-i18next';

export default function BackupSection() {
  const { t } = useTranslation();

  return (
    <Card>
      <Item
        onPress={() => {
          Navigation.navigate(Screens.CreateBackup.Name);
        }}
        firstItem={true}
        title={t('Create backup') ?? 'Create backup'}
        description={t('Create backup summary') ?? 'Save your passwords, tags, and other settings on a backup file'} />

      <Item
        onPress={() => {
          Navigation.navigate(Screens.RestoreBackup.Name);
        }}
        title={t('Restore backup' ?? 'Restore backup')}
        description={t('Restore backup summary') ?? 'Import a backup file with your data'} />
    </Card>
  );
}
