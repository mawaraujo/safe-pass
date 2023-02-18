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
  const tagsState = useSelector((state: RootState) => state.tags);

  if (!tagsState.length) {
    return (
      null
    );
  }

  const handleSelect = React.useCallback((value: string) => {
    onSelect?.(value);
  }, [onSelect]);

  return (
    <View style={tagsSelectorStyles.main}>
      <ScrollView
        contentContainerStyle={tagsSelectorStyles.container}
        horizontal={true}
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
