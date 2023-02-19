import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import styles from './emptySearch.styles';

function EmptySearch() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('Search not found')}</Text>
    </View>
  );
}

export default React.memo(EmptySearch, () => true);
