import React from 'react';
import Card from '../../../../components/card/card';
import Application from '../../../../../app.json';
import { ItemSlot } from '../../../../components/item';
import { Item } from '../../../../components/item';
import { Picker } from '@react-native-picker/picker';
import generalStyles from './informationGeneral.styles';
import { Colors, Storage as StorageRes } from '../../../../res';
import { Link, Storage } from '../../../../utils';
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

export default function GeneralSection() {
  const { t, i18n } = useTranslation();
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
      const lang: NLang.Options = JSON.parse(result);
      setLang(lang.language);

    } else {
      setLang(i18n.language);
    }
  };

  React.useEffect(() => {
    getLangValue();
  }, []);

  return (
    <React.Fragment>
      <Card>
        <ItemSlot
          childrenPosition="bottom"
          title={t('Language') ?? 'Language'}
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

      <Card>
        <Item
          firstItem
          onPress={() => Link.openURL(Application.github)}
          isLink={true}
          title={t('Developer') ?? 'Developer'}
          description={Application.author} />

        <Item
          title={t('Version') ?? 'Version'}
          description={Application.version} />
      </Card>
    </React.Fragment>
  );
}
