import React from 'react';
import Card from '../../../../components/card/card';
import Application from '../../../../../app.json';
import Item from '../../components/item/item';
import { Link } from '../../../../utils';

export default function InformationSection() {
  return (
    <Card>
      <Item
        firstItem={true}
        onPress={() => Link.openURL(Application.github)}
        isLink={true}
        title="Developer"
        description={Application.author} />

      <Item
        title="Version"
        description={Application.version} />
    </Card>
  );
}
