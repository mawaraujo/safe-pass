import React from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import alertSlice from '../../../../store/reducers/alertSlice';
import { Backup } from '../../../../utils';
import Button from '../../../../components/button/button';
import { Colors } from '../../../../res';
import styles from './restoreFile.styles';
import NavigationBar from '../../../../components/navigationBar/navigationBar';
import Default from '../../../../layout/default/default';
import Icons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import useRestoreFile from './useRestoreFile';
import { NPassword, NTag } from '../../../../types';
import CheckBox from '@react-native-community/checkbox';
import Card from '../../../../components/card/card';
import Text from '../../../../components/text/text';

export default function RestoreFile() {
  const { t } = useTranslation();
  const {
    importPasswords,
    importTags,
    deleteDuplicatedPasswords,
    deleteDuplicatedTags,
  } = useRestoreFile();

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [importedPasswords, setImportedPasswords] = React.useState<NPassword.Passwords>([]);
  const [importedTags, setImportedTags] = React.useState<NTag.Tags>([]);

  const [passwordsToSave, setPasswordsToSave] = React.useState<NPassword.Passwords>([]);
  const [tagsToSave, setTagsToSave] = React.useState<NTag.Tags>([]);

  const showImportSelector: boolean = (importedPasswords.length > 0 || importedTags.length > 0);

  const addPaswordToSave = (password: NPassword.Password) => (
    setPasswordsToSave([
      ...passwordsToSave,
      password,
    ])
  );

  const removePasswordToSave = (password: NPassword.Password): void => {
    const results = passwordsToSave.filter((p) =>
      p.id !== password.id);

    setPasswordsToSave(results);
  };

  const addTagToSave = (password: NTag.Tag): void => (
    setTagsToSave([
      ...passwordsToSave,
      password,
    ])
  );

  const removeTagToSave = (tag: NTag.Tag): void => {
    const results = tagsToSave.filter((p) =>
      p.id !== tag.id);

    setTagsToSave(results);
  };

  const importFile = async (): Promise<void> => {
    reset();
    setIsLoading(true);

    try {
      const { passwords, tags } = await Backup.restoreOriginalFile();

      const filteredPasswords = deleteDuplicatedPasswords(passwords);
      const filteredTags = deleteDuplicatedTags(tags);

      if (filteredPasswords.length <= 0 && filteredTags.length <= 0) {
        dispatch(
            alertSlice.actions.show({
              title: t('restore.noItemsFound'),
              type: 'Danger',
            }),
        );
      }

      setImportedPasswords(filteredPasswords);
      setImportedTags(filteredTags);

    } catch (error) {
      console.log(error);

      dispatch(
          alertSlice.actions.show({
            title: t('Backup file import failed'),
            type: 'Danger',
          }),
      );

    } finally {
      setIsLoading(false);
    }
  };

  const saveChanges = (): void => {
    importPasswords(passwordsToSave);
    importTags(tagsToSave);
    reset();

    dispatch(
        alertSlice.actions.show({
          title: t('Backup imported successfully'),
          type: 'Success',
        }),
    );
  };

  const reset = (): void => {
    setImportedPasswords([]);
    setImportedTags([]);
    setPasswordsToSave([]);
    setTagsToSave([]);
  };

  return (
    <Default>
      <NavigationBar />

      <View
        style={styles.container}>

        {
          !showImportSelector && (
            <React.Fragment>
              {
                !isLoading && (
                  <View style={styles.statusContainer}>
                    <Icons
                      style={styles.icon}
                      name="attach-outline"
                      size={100}
                      color={Colors.System.Brand} />

                    <Text
                      size="3"
                      style={styles.title}>

                      {t('Select a backup file').toString()}
                    </Text>

                    <Button
                      text={t('Select') ?? 'Select'}
                      onPress={importFile} />
                  </View>
                )
              }

              {
                isLoading && (
                  <View style={styles.container}>
                    <ActivityIndicator
                      size="large"
                      color={Colors.System.Brand} />
                  </View>
                )
              }
            </React.Fragment>
          )
        }

        {
          showImportSelector && (
            <ScrollView>
              {
                importedPasswords.length > 0 && (
                  <React.Fragment>
                    <Text size="3">{t('Passwords').toString()}</Text>
                    <Text
                      size="2"
                      muted
                      style={styles.subTitle}>
                      {t('restore.selectItemInstruction').toString()}
                    </Text>

                    <Card>
                      <View style={styles.cardContainer}>
                        {
                          importedPasswords.map((item, key) => (
                            <View
                              key={item.id + key}
                              style={styles.cardContent}>

                              <CheckBox
                                tintColors={{
                                  true: Colors.System.Brand,
                                }}
                                value={passwordsToSave.findIndex((t) => t.id === item.id) !== -1}
                                onValueChange={(val) => {
                                  if (val) return addPaswordToSave(item);
                                  removePasswordToSave(item);
                                }}
                              />
                              <View style={styles.cardContentText}>
                                <Text size="2">{item.name}</Text>
                                <Text muted>
                                  {
                                    item.email ||
                                    item.username ||
                                    item.url
                                  }
                                </Text>
                              </View>
                            </View>
                          ))
                        }
                      </View>
                    </Card>
                  </React.Fragment>
                )
              }

              {
                importedTags.length > 0 && (
                  <React.Fragment>
                    <Text size="3">{t('Tags').toString()}</Text>
                    <Text
                      size="2"
                      muted
                      style={styles.subTitle}>
                      {t('restore.selectItemInstruction').toString()}
                    </Text>

                    <Card>
                      <View style={styles.cardContainer}>
                        {
                          importedTags.map((item, index) => (
                            <View
                              key={item.id + index}
                              style={styles.cardContent}>

                              <CheckBox
                                tintColors={{
                                  true: Colors.System.Brand,
                                }}
                                value={tagsToSave.findIndex((t) => t.id === item.id) !== -1}
                                onValueChange={(val) => {
                                  if (val) return addTagToSave(item);
                                  removeTagToSave(item);
                                }}
                              />
                              <Text
                                style={styles.cardContentText}
                                size="2">
                                {item.name}
                              </Text>
                            </View>
                          ))
                        }
                      </View>
                    </Card>
                  </React.Fragment>
                )
              }

              <Button
                text={t('Save changes').toString()}
                onPress={saveChanges} />

              <Button
                style={styles.button}
                textStyle={styles.buttonText}
                text={t('Cancel').toString()}
                onPress={reset}/>
            </ScrollView>
          )
        }
      </View>
    </Default>
  );
}
