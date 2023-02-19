import React from 'react';
import Card from '../../../../components/card/card';
import ItemSlot from '../../components/itemSlot/itemSlot';
import { Picker } from '@react-native-picker/picker';
import generalStyles from './language.styles';
import { Colors, Storage as StorageRes } from '../../../../res';
import { Storage } from '../../../../utils';
import { NLang } from '../../../../types';
import { useTranslation } from 'react-i18next';

const LANG_LIST = [
  {
    name: 'English',
    value: NLang.AvailableLanguages.En,
  },
  {
    name: 'Español',
    value: NLang.AvailableLanguages.Es,
  },
];

export default function LanguageSection() {
  const { i18n } = useTranslation();
  const [lang, setLang] = React.useState<string>(NLang.AvailableLanguages.En);

  const setLangValue = async (value: string) => {
    const options: NLang.Options = {
      forced: true,
      language: value,
    };

    const result = await Storage.set(StorageRes.Keys.Language, JSON.stringify(options));

    if (result) {
      i18n.changeLanguage(options.language);
      setLang(options.language);
    }
  };

  const getLangValue = async () => {
    const result = await Storage.get(StorageRes.Keys.Language);

    if (result) {
      console.log(result);

      const lang: NLang.Options = JSON.parse(result);
      setLang(lang.language);
    }
  };

  React.useEffect(() => {
    getLangValue();
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
          selectedValue={lang}
          onValueChange={(itemValue, itemIndex) => setLangValue(itemValue)}>

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
