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
import { useTranslation } from 'react-i18next';
import useRestore from '../hooks/useRestore';
import { CardAccordion } from '../../../../components/card';
import Text from '../../../../components/text/text';
import CheckEntry from '../components/checkEntry/checkEntry';
import ActionButton from '../../../../components/actionButton/actionButton';

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
              title: t('backup.restore.noItemsFound'),
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
              title: t('backup.restore.existingItemsFound'),
              extraInformation: t('backup.restore.existingItemsFoundDescription').toString(),
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

      <View style={styles.containerTitle}>
        <Text
          size="3"
          style={styles.description}>

          {
            restore.hasElementsToSave
              ? t('backup.restore.selectItemInstruction').toString()
              : t('backup.restore.actions.restoreFile').toString()
          }
        </Text>
      </View>

      {
        !restore.hasElementsToSave && (
          <ScrollView contentContainerStyle={styles.container}>
            {
              !isLoading && (
                <ActionButton
                  text={t('backup.restore.selectFile').toString()}
                  icon="attach-outline"
                  onPress={importFile} />
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
          </ScrollView>
        )
      }

      {
        restore.hasElementsToSave && (
          <ScrollView style={styles.listContainer}>
            {
              restore.importedPasswords.length > 0 && (
                <CardAccordion
                  title={`${t('Passwords').toString()} (${restore.importedPasswords.length})`}>

                  <View style={styles.cardContainer}>
                    {
                      restore.importedPasswords.map((item) => (
                        <CheckEntry
                          key={item.id}
                          name={item.name}
                          duplicated={item?.duplicated === true}
                          checked={restore.passwordsToSave.findIndex((t) => t.id === item.id) !== -1}
                          onAdd={() => restore.addPaswordToSave(item)}
                          onRemove={() => restore.removePasswordToSave(item)}
                          showDescription={true}
                          description={item.username || item.email || item.url} />
                      ))
                    }
                  </View>
                </CardAccordion>
              )
            }

            {
              restore.importedTags.length > 0 && (
                <CardAccordion
                  title={`${t('Tags').toString()} (${restore.importedTags.length})`}>

                  <View style={styles.cardContainer}>
                    {
                      restore.importedTags.map((item) => (
                        <CheckEntry
                          key={item.id}
                          name={item.name}
                          duplicated={item?.duplicated === true}
                          checked={restore.tagsToSave.findIndex((t) => t.id === item.id) !== -1}
                          onAdd={() => restore.addTagToSave(item)}
                          onRemove={() => restore.removeTagToSave(item)} />
                      ))
                    }
                  </View>
                </CardAccordion>
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
    </Default>
  );
}
