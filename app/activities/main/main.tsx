import React from 'react';
import {ScrollView} from 'react-native';
import styles from './main.styles';
import Default from '../../layout/default/default';
import SearchBar from '../../components/searchBar/searchBar';
import {useSelector} from 'react-redux';
import type {RootState} from '../../store/store';
import PasswordElement from '../../components/passwordElement/passwordElement';
import Empty from '../../components/empty/empty';
import {Screens} from '../../res';
import {NPassword} from '../../types';

interface ImainProps {
  navigation: {
    navigate: Function
  }
}

function searchFilterLogic(searchValue: string, passwords: NPassword.Passwords): NPassword.Passwords {
  return passwords.filter((password: NPassword.Password) => {
    return (
      password.email?.toLowerCase().includes(searchValue.toLowerCase()) ||
      password.url?.toLowerCase().includes(searchValue.toLowerCase()) ||
      password.username?.toLowerCase().includes(searchValue.toLowerCase()) ||
      password.notes?.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
}

export default function Main({navigation}: ImainProps) {
  const [
    searchValue,
    setSearchValue,
  ] = React.useState<string>('');

  const passwords = useSelector(
      (state: RootState) => state.passwords);

  /**
   * REFACTOR ME
   */
  const computedPasswords: NPassword.Passwords = React.useMemo(() => {
    return searchFilterLogic(
        searchValue,
        passwords,
    );
  }, [searchValue, passwords]);

  const addPassword = React.useCallback(() => {
    navigation.navigate(
        Screens.addPassword.name,
    );
  }, []);

  return (
    <Default style={styles.main}>
      <ScrollView
        contentContainerStyle={styles.mainContent}>

        <SearchBar
          onChange={setSearchValue} />

        {
          computedPasswords?.length > 0 && (
            computedPasswords.map((password, index) => (
              <PasswordElement
                key={`${password.id}${index}`}
                item={password} />
            ))
          )
        }

        {
          !passwords?.length && (
            <Empty
              text="Your password list is empty"
              actionButtonText="Add Password"
              onPress={addPassword} />
          )
        }
      </ScrollView>
    </Default>
  );
}
