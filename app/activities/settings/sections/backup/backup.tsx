import React from 'react';
import Card from '../../../../components/card/card';
import Item from '../../components/item/item';
import {Navigation} from '../../../../utils';
import {Screens} from '../../../../res';

export default function BackupSection() {
  return (
    <Card>
      <Item
        onPress={() => {
          Navigation.navigate(Screens.Backup.Name, {
            screen: Screens.Backup.Export.Name,
          });
        }}
        firstItem={true}
        title="Export data"
        description="Save your passwords, categories, and other settings on a backup file." />

      <Item
        onPress={() => {
          Navigation.navigate(Screens.Backup.Name, {
            screen: Screens.Backup.Import.Name,
          });
        }}
        title="Import data"
        description="Import a backup file with your data." />
    </Card>
  );
}
