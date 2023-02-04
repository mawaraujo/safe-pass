import React from 'react';
import Card from '../../../../components/card/card';
import ItemStatic from '../../components/itemStatic/itemStatic';
import Application from '../../../../../app.json';

export default function InformationSection() {
  return (
    <Card>
      <ItemStatic
        firstItem={true}
        title="Developer"
        description={Application.author} />

      <ItemStatic
        title="Version"
        description={Application.version} />
    </Card>
  );
}
