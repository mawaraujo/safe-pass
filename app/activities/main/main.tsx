import React from 'react';
import {View} from 'react-native';
import styles from './main.styles';
import Default from '../../layout/default/default';
import Header from '../../components/header/header';
import {Colors} from '../../res';
import SearchBar from '../../components/searchBar/searchBar';

export default function Main() {
  return (
    <Default
      statusBar={{
        backgroundColor: Colors.System.BrandSemiLight,
        barStyle: 'light-content',
      }}
      style={styles.main}>

      <Header />

      <View style={styles.mainContent}>
        <SearchBar />
      </View>
    </Default>
  );
}
