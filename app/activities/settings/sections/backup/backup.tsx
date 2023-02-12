import React from 'react';
import Card from '../../../../components/card/card';
import Item from '../../components/item/item';
import { Navigation } from '../../../../utils';
import { Screens } from '../../../../res';

export default function BackupSection() {
  return (
    <Card>
      <Item
        onPress={() => {
          Navigation.navigate(Screens.CreateBackup.Name);
        }}
        firstItem={true}
        title="Create backup"
        description="Save your passwords, categories, and other settings on a backup file." />

      <Item
        onPress={() => {
          Navigation.navigate(Screens.RestoreBackup.Name);
        }}
        title="Restore backup"
        description="Import a backup file with your data." />
    </Card>
  );
}
