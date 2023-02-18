import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './main.styles';
import Default from '../../layout/default/default';
import SearchBar from '../../components/searchBar/searchBar';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import PasswordElement from '../../components/passwordElement/passwordElement';
import Empty from '../../components/empty/empty';
import { Screens } from '../../res';
import { NPassword } from '../../types';
import EmptySearch from '../../components/emptySearch/emptySearch';
import { useSearch } from '../../hooks';
import Navigation from '../../utils/navigation';
import WelcomeHeader from '../../components/welcomeHeader/welcomeHeader';
import TagsSelector from './components/tagsSelector';

interface ImainProps {
  navigation: {
    navigate: Function,
    addListener: (event: string, callback: Function) => Function
  }
}

export default function Main({ navigation }: ImainProps) {
  const search = useSearch();
  const [selectedTag, setSelectedTag] = React.useState<string>('');

  const passwords = useSelector(
      (state: RootState) => state.passwords);

  const computedPasswords: NPassword.Passwords = React.useMemo(() => {
    return searchFilter(
        search.value,
        passwords,
        selectedTag,
    );
  }, [search.value, passwords, selectedTag]);

  /**
   * Go to add password screen
   */
  const addPassword = React.useCallback(() => {
    navigation.navigate(
        Screens.CreatePassword.Name,
    );
  }, []);

  /**
   * Go to password details screen
   */
  const handleViewPasswordDetails = React.useCallback((password: NPassword.Password) => {
    Navigation.navigate(
        Screens.Preview.Name,
        {
          password,
        });
  }, []);

  return (
    <Default style={styles.main}>
      <WelcomeHeader title="My passwords" />

      {
        passwords.length > 0 && (
          <SearchBar
            value={search.value}
            onClear={search.handleClear}
            onChangeText={search.setVaue} />
        )
      }
      <View
        style={styles.mainScrollView}>

        <FlatList
          style={styles.flatList}
          keyboardShouldPersistTaps={'always'}
          removeClippedSubviews={true}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          keyExtractor={(item, index) => (item.id + index)}
          data={computedPasswords}
          ListHeaderComponent={() => (
            <TagsSelector
              idSelected={selectedTag}
              onSelect={(value) => setSelectedTag(value)} />
          )}
          renderItem={({ item }) => (
            <PasswordElement
              onPress={() => handleViewPasswordDetails(item)}
              item={item} />
          )}
          ListEmptyComponent={() => {
            if (!search.value) {
              return <Empty
                text="Your password list is empty"
                actionButtonText="Add Password"
                onPress={addPassword} />;
            }

            return (null);
          }} />

        {
          search.value && !computedPasswords?.length && (
            <EmptySearch />
          )
        }
      </View>
    </Default>
  );
}

function searchFilter(
    str: string,
    passwords: NPassword.Passwords,
    selectedTag: string,
): NPassword.Passwords {
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

    ) && password.tagId?.includes(selectedTag);
  });
}
