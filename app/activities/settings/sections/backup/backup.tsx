import React from 'react';
import Card from '../../../../components/card/card';
import Item from '../../components/item/item';
import {Navigation} from '../../../../utils';
import {Screens} from '../../../../res';

export default function BackupSection() {
  const handleNavigate = (importScreen: boolean = false): void => {
    Navigation.navigate(Screens.backup.name, {
      screen: importScreen
        ? Screens.backup.import.name
        : Screens.backup.export.name,
    });
  };

  return (
    <Card>
      <Item
        onPress={() => handleNavigate(true)}
        firstItem={true}
        title="Export data"
        description="Save your passwords, categories, and other settings on a backup file." />

      <Item
        onPress={() => handleNavigate()}
        title="Import data"
        description="Import a backup file with your data." />
    </Card>
  );
}
