import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './tags.styles';
import Default from '../../layout/default/default';
import SearchBar from '../../components/searchBar/searchBar';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import Empty from '../../components/empty/empty';
import { Screens } from '../../res';
import { NTag } from '../../types';
import EmptySearch from '../../components/emptySearch/emptySearch';
import { useSearch } from '../../hooks';
import TagElement from '../../components/tagElement/tagElement';
import tagSlice from '../../store/reducers/tagSlice';
import Confirm from '../../components/modal/confirm/confirm';
import WelcomeHeader from '../../components/welcomeHeader/welcomeHeader';

interface ITagsProps {
  navigation: {
    navigate: Function
  }
}

export default function Tags({ navigation }: ITagsProps) {
  const [tagToDelete, setTagToDelete] = React.useState<NTag.Tag | null>(null);

  const dispatch = useDispatch();
  const search = useSearch();

  const { tags, passwords } = useSelector((state: RootState) => state);

  const computedTags: NTag.Tags = React.useMemo(() => {
    return searchFilter(
        search.value,
        tags,
    );
  }, [search.value, tags]);

  const handleDelete = React.useCallback(() => {
    if (!tagToDelete) return;

    dispatch(
        tagSlice
            .actions
            .delete(tagToDelete),
    );

    setTagToDelete(null);
  }, [tagToDelete]);

  const countLinkedPasswords = React.useCallback((tag: NTag.Tag): number => {
    return passwords
        .filter((p) => p.tagId === tag.id)
        .length;
  }, [passwords]);

  /**
   * Go to add tag screen
   */
  const addTag = () => {
    navigation.navigate(
        Screens.CreateTag.Name,
    );
  };

  return (
    <Default style={styles.main}>
      <WelcomeHeader title="Tags" />

      {
        tagToDelete !== null && (
          <Confirm
            title="¿Do you want to delete this tag?"
            extraInformation="This entry will delete forever"
            onAccept={handleDelete}
            onCancel={() => setTagToDelete(null)}
            show={tagToDelete !== null}
          />
        )
      }

      {
        tags.length > 0 && (
          <SearchBar
            value={search.value}
            onClear={search.handleClear}
            onChangeText={search.setVaue} />
        )
      }

      <View
        style={styles.mainScrollView}>

        <FlatList
          data={computedTags}
          style={styles.flatList}
          keyboardShouldPersistTaps={'always'}
          removeClippedSubviews={true}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          keyExtractor={(item, index) => (item.id + index)}
          renderItem={({ item }) => (
            <TagElement
              linkedPasswords={countLinkedPasswords(item)}
              onPressDelete={(item) => setTagToDelete(item)}
              item={item} />
          )}
          ListEmptyComponent={() => {
            return <Empty
              text="Your tag list is empty"
              actionButtonText="Add tag"
              onPress={addTag} />;
          }} />

        {
          search.value && !computedTags?.length && (
            <EmptySearch />
          )
        }
      </View>
    </Default>
  );
}

function searchFilter(str: string, tags: NTag.Tags): NTag.Tags {
  return tags.filter((tag: NTag.Tag) => {
    return (
      tag.name
          .toLowerCase()
          .includes(str.toLowerCase())
    );
  });
}
