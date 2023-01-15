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
import EmptySearch from '../../components/emptySearch/emptySearch';
import useSearch from '../../hooks/useSearch';
import Navigation from '../../utils/navigation';

interface ImainProps {
  navigation: {
    navigate: Function
  }
}

export default function Main({navigation}: ImainProps) {
  const search = useSearch();

  const passwords = useSelector(
      (state: RootState) => state.passwords);

  const computedPasswords: NPassword.Passwords = React.useMemo(() => {
    return searchFilter(
        search.value,
        passwords,
    );
  }, [search.value, passwords]);

  /**
   * Go to add password screen
   */
  const addPassword = () => {
    navigation.navigate(
        Screens.addPassword.name,
    );
  };

  /**
   * Go to password details screen
   */
  const handleViewPasswordDetails = (password: NPassword.Password) => {
    Navigation.navigate(
        Screens.passwordDetails.name,
        {
          password,
        });

  };

  return (
    <Default style={styles.main}>
      <SearchBar
        value={search.value}
        onClear={search.handleClear}
        onChangeText={search.setVaue} />

      <ScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={styles.mainScrollView}>

        {
          computedPasswords?.length > 0 && (
            computedPasswords.map((password, index) => (
              <PasswordElement
                onPress={handleViewPasswordDetails}
                key={`${password.id}${index}`}
                item={password} />
            ))
          )
        }

        {
          search.value && !computedPasswords?.length && (
            <EmptySearch />
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

function searchFilter(str: string, passwords: NPassword.Passwords): NPassword.Passwords {
  return passwords.filter((password: NPassword.Password) => {
    return (
      password.name
          .toLowerCase()
          .includes(str.toLowerCase()) ||
      password.email
          ?.toLowerCase()
          .includes(str.toLowerCase()) ||
      password.url
          ?.toLowerCase()
          .includes(str.toLowerCase()) ||
      password.username
          ?.toLowerCase()
          .includes(str.toLowerCase()) ||
      password.notes
          ?.toLowerCase()
          .includes(str.toLowerCase())
    );
  });
}
