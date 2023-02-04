import React from 'react';
import Card from '../../../../components/card/card';
import ItemSelector from '../../components/itemSelector/itemSelector';

export default function BackupSection() {
  return (
    <Card>
      <ItemSelector
        firstItem={true}
        title="Export data"
        description="Save your passwords, categories, and other settings on a backup file." />

      <ItemSelector
        title="Import data"
        description="Import a backup file with your data." />
    </Card>
  );
}
