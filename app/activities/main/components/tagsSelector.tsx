import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import tagsSelectorStyles from './tagsSelector.styles';

interface TagsSelectorProps {
  idSelected?: string,
  onSelect?: (value: string) => void
}

export default function TagsSelector({ idSelected, onSelect }: TagsSelectorProps) {
  const scrollRef = React.useRef<any>();
  const tagsState = useSelector((state: RootState) => state.tags);

  const handleSelect = React.useCallback((value: string) => {
    onSelect?.(value);
  }, [onSelect]);

  /**
   * If the user deletes the last tag
   */
  React.useEffect(() => {
    if (!tagsState.length) {
      handleSelect('');
    }
  }, [tagsState]);

  /**
   * Auto scroll on select all
   */
  React.useEffect(() => {
    if (!idSelected?.length) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({
          y: 0,
          x: 0,
          animated: true,
        });
      }, 100);
    }
  }, [idSelected]);

  if (!tagsState.length) {
    return (
      null
    );
  }

  return (
    <View style={tagsSelectorStyles.main}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={tagsSelectorStyles.container}
        horizontal={true}
        scrollEventThrottle={200}
        showsHorizontalScrollIndicator={false}>

        <TouchableOpacity
          onPress={() => handleSelect('')}
          style={[
            tagsSelectorStyles.card,
            !idSelected && tagsSelectorStyles.selectedCard,
          ]}>

          <Text
            style={[
              tagsSelectorStyles.cardTitle,
              !idSelected && tagsSelectorStyles.selectedCardTitle,
            ]}>
            All tags
          </Text>
        </TouchableOpacity>

        {
          tagsState.map((tag) => (
            <TouchableOpacity
              onPress={() => handleSelect(tag.id)}
              style={[
                tagsSelectorStyles.card,
                idSelected === tag.id && tagsSelectorStyles.selectedCard,
              ]}
              key={tag.id}>

              <Text
                style={[
                  tagsSelectorStyles.cardTitle,
                  idSelected === tag.id && tagsSelectorStyles.selectedCardTitle,
                ]}>
                {tag.name}
              </Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
}
