import React from 'react';
import Card from '../../../../components/card/card';
import ItemSlot from '../../components/itemSlot/itemSlot';
import { Picker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../../store/store';
import settingsSlice from '../../../../store/reducers/settingsSlice';
import { NSettings } from '../../../../types';
import generalStyles from './language.styles';
import { Colors } from '../../../../res';

const LANG_LIST = [
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'Español',
    value: 'es',
  },
];

export default function LanguageSection() {
  const dispatch = useDispatch();

  const appLang = useSelector((state: RootState) => state.settings.language);

  const setSelectedLanguage = React.useCallback((value: keyof typeof NSettings.AvailableLanguages) => {
    dispatch(
        settingsSlice.actions.setLanguage({
          language: value,
          forcedLanguage: true,
        }),
    );
  }, []);

  return (
    <Card>
      <ItemSlot
        childrenPosition="bottom"
        title="Language"
        firstItem={true}>

        <Picker
          style={generalStyles.picker}
          mode="dropdown"
          dropdownIconColor={Colors.System.Brand}
          selectedValue={appLang}
          onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>

          {
            LANG_LIST.map((lang) => (
              <Picker.Item
                style={generalStyles.pickerItem}
                key={lang.value}
                label={lang.name}
                value={lang.value} />
            ))
          }
        </Picker>
      </ItemSlot>
    </Card>
  );
}
