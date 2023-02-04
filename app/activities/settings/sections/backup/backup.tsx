import React from 'react';
import Card from '../../../../components/card/card';
import Item from '../../components/item/item';

export default function BackupSection() {

  const handleNavigate = (): void => {
    console.log('Navigating');
  };

  return (
    <Card>
      <Item
        onPress={handleNavigate}
        firstItem={true}
        title="Export data"
        description="Save your passwords, categories, and other settings on a backup file." />

      <Item
        onPress={handleNavigate}
        title="Import data"
        description="Import a backup file with your data." />
    </Card>
  );
}
