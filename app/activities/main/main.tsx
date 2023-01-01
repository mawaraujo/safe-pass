import React from 'react';
import {View} from 'react-native';
import styles from './main.styles';
import Default from '../../layout/default/default';
import Header from '../../components/header/header';
import {Colors} from '../../res';
import SearchBar from '../../components/searchBar/searchBar';
import {useSelector} from 'react-redux';
import type {RootState} from '../../store/store';
import PasswordElement from '../../components/passwordElement/password';
import Empty from '../../components/empty/empty';

export default function Main() {
  const [
    searchValue,
    setSearchValue,
  ] = React.useState<string>('');

  const passwords = useSelector((state: RootState) => state.passwords);

  const addPassword = React.useCallback(() => {
    console.log('Password add');
  }, []);

  return (
    <Default
      statusBar={{
        backgroundColor: Colors.System.BrandSemiLight,
        barStyle: 'light-content',
      }}
      style={styles.main}>

      <Header />

      <View style={styles.mainContent}>
        <SearchBar onChange={setSearchValue} />

        {
          passwords?.length > 0 && (
            passwords.map((password) => (
              <PasswordElement
                key={password.id}
                item={password} />
            ))
          )
        }

        {
          !passwords?.length && (
            <Empty
              text="Your password list is empty"
              actionButtonText="Add password"
              onPress={addPassword} />
          )
        }
      </View>
    </Default>
  );
}
