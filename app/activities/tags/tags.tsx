import React from 'react';
import { ScrollView } from 'react-native';
import styles from './tags.styles';
import Default from '../../layout/default/default';
import SearchBar from '../../components/searchBar/searchBar';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import Empty from '../../components/empty/empty';
import { Screens } from '../../res';
import { NTag } from '../../types';
import EmptySearch from '../../components/emptySearch/emptySearch';
import { useSearch } from '../../hooks';
import TagElement from '../../components/tagElement/tagElement';

interface ITagsProps {
  navigation: {
    navigate: Function
  }
}

export default function Tags({ navigation }: ITagsProps) {
  const search = useSearch();

  const { tags, passwords } = useSelector((state: RootState) => state);

  const computedTags: NTag.Tags = React.useMemo(() => {
    return searchFilter(
        search.value,
        tags,
    );
  }, [search.value, tags]);


  const passwordsCount = React.useCallback((tag: NTag.Tag): number => {
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
      {
        tags.length > 0 && (
          <SearchBar
            value={search.value}
            onClear={search.handleClear}
            onChangeText={search.setVaue} />
        )
      }

      <ScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={styles.mainScrollView}>

        {
          !tags?.length && (
            <Empty
              text="Your tag list is empty"
              actionButtonText="Add tag"
              onPress={addTag} />
          )
        }

        {
          computedTags?.length > 0 && (
            computedTags.map((tag, index) => (
              <TagElement
                key={`${tag.id}${index}`}
                count={passwordsCount(tag)}
                item={tag} />
            ))
          )
        }

        {
          search.value && !computedTags?.length && (
            <EmptySearch />
          )
        }
      </ScrollView>
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
