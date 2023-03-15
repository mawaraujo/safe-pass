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
import useRestore from '../hooks/useRestore';
import CheckBox from '@react-native-community/checkbox';
import Card from '../../../../components/card/card';
import Text from '../../../../components/text/text';

export default function RestoreFile() {
  const { t } = useTranslation();
  const restore = useRestore();

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const importFile = async (): Promise<void> => {
    restore.reset();
    setIsLoading(true);

    try {
      const { passwords, tags } = await Backup.restoreOriginalFile();

      if (!passwords || !tags) {
        dispatch(
            alertSlice.actions.show({
              title: t('restore.noItemsFound'),
              type: 'Danger',
            }),
        );
        return;
      }

      const filteredPasswords = restore.checkDuplicatedPasswords(passwords);
      const filteredTags = restore.checkDuplicatedTags(tags);

      restore.setImportedPasswords(filteredPasswords);
      restore.setImportedTags(filteredTags);

      if (
        filteredPasswords.some((p) => p?.duplicated === true) ||
        filteredTags.some((f) => f?.duplicated === true)
      ) {
        dispatch(
            alertSlice.actions.show({
              title: t('restore.existingItemsFound'),
              extraInformation: t('restore.existingItemsFoundDescription').toString(),
              type: 'Warning',
            }),
        );
      }

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
    restore.importPasswords();
    restore.importTags();
    restore.reset();

    dispatch(
        alertSlice.actions.show({
          title: t('Backup imported successfully'),
          type: 'Success',
        }),
    );
  };

  return (
    <Default>
      <NavigationBar />

      <View
        style={styles.container}>

        {
          !restore.hasElementsToSave && (
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
          restore.hasElementsToSave && (
            <ScrollView>
              {
                restore.importedPasswords.length > 0 && (
                  <React.Fragment>
                    <Text size="3">
                      {`${t('Passwords').toString()} (${restore.importedPasswords.length})`}
                    </Text>

                    <Text
                      size="2"
                      muted
                      style={styles.subTitle}>
                      {t('restore.selectItemInstruction').toString()}
                    </Text>

                    <Card>
                      <View style={styles.cardContainer}>
                        {
                          restore.importedPasswords.map((item, key) => (
                            <View
                              key={item.id + key}
                              style={styles.cardContent}>

                              <CheckBox
                                tintColors={{
                                  true: Colors.System.Brand,
                                }}
                                disabled={item?.duplicated}
                                style={[
                                  item?.duplicated && styles.checkboxDisabled,
                                ]}
                                value={restore.passwordsToSave.findIndex((t) => t.id === item.id) !== -1}
                                onValueChange={(val) => {
                                  if (val) return restore.addPaswordToSave(item);
                                  restore.removePasswordToSave(item);
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
                restore.importedTags.length > 0 && (
                  <React.Fragment>
                    <Text size="3">
                      {`${t('Tags').toString()} (${restore.importedTags.length})`}
                    </Text>

                    <Text
                      size="2"
                      muted
                      style={styles.subTitle}>
                      {t('restore.selectItemInstruction').toString()}
                    </Text>

                    <Card>
                      <View style={styles.cardContainer}>
                        {
                          restore.importedTags.map((item, index) => (
                            <View
                              key={item.id + index}
                              style={styles.cardContent}>

                              <CheckBox
                                tintColors={{
                                  true: Colors.System.Brand,
                                }}
                                style={[
                                  item?.duplicated && styles.checkboxDisabled,
                                ]}
                                disabled={item?.duplicated}
                                value={restore.tagsToSave.findIndex((t) => t.id === item.id) !== -1}
                                onValueChange={(val) => {
                                  if (val) return restore.addTagToSave(item);
                                  restore.removeTagToSave(item);
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
                onPress={restore.reset}/>
            </ScrollView>
          )
        }
      </View>
    </Default>
  );
}
