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
// import EmptySearch from '../../components/emptySearch/emptySearch';
import { useSearch } from '../../hooks';
import Navigation from '../../utils/navigation';
import WelcomeHeader from '../../components/welcomeHeader/welcomeHeader';
import TagsSelector from './components/tagsSelector/tagsSelector';
import { useTranslation } from 'react-i18next';
import Separator from '../../components/separator/separator';

interface ImainProps {
  navigation: {
    navigate: Function,
    addListener: (event: string, callback: Function) => Function
  }
}

export default function Main({ navigation }: ImainProps) {
  const { t } = useTranslation();

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
   * Go to password details screen
   */
  const handleViewPasswordDetails = React.useCallback((password: NPassword.Password) => {
    Navigation.navigate(
        Screens.Preview.Name,
        {
          passwordId: password.id,
        });
  }, []);

  const handleSelectTag = React.useCallback((value: string) => {
    if (value === selectedTag) {
      setSelectedTag('');
      return;
    }

    setSelectedTag(value);
  }, [selectedTag, setSelectedTag]);

  return (
    <Default>
      <WelcomeHeader
        title={t('Passwords') ?? 'My passwords'} />

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

        {
          passwords.length > 0 && (
            <TagsSelector
              idSelected={selectedTag}
              onSelect={handleSelectTag} />
          )
        }

        <FlatList
          style={styles.flatList}
          keyboardShouldPersistTaps={'always'}
          removeClippedSubviews={true}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          keyExtractor={(item, index) => (item.id + index)}
          data={computedPasswords}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <PasswordElement
              onPress={() => handleViewPasswordDetails(item)}
              item={item} />
          )}
          ListEmptyComponent={() => {
            if (!search.value && !selectedTag) {
              return <Empty text={t('List empty') ?? 'List empty'} />;
            }

            return (null);
          }} />

        {/* {
          (
            (search.value || selectedTag?.length > 0) &&
            computedPasswords?.length <= 0
          ) && (
            <EmptySearch />
          )
        } */}
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
