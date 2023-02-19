import React from 'react';
import Card from '../../../../components/card/card';
import Application from '../../../../../app.json';
import Item from '../../components/item/item';
import { Link } from '../../../../utils';
import { useTranslation } from 'react-i18next';

export default function InformationSection() {
  const { t } = useTranslation();

  return (
    <Card>
      <Item
        firstItem={true}
        onPress={() => Link.openURL(Application.github)}
        isLink={true}
        title={t('Developer') ?? 'Developer'}
        description={Application.author} />

      <Item
        title={t('Version') ?? 'Version'}
        description={Application.version} />
    </Card>
  );
}
