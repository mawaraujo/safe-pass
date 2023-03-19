import React from 'react';
import { View, ActivityIndicator, ScrollView, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import alertSlice from '../../../store/reducers/alertSlice';
import { Backup } from '../../../utils';
import Button from '../../../components/button/button';
import { Colors } from '../../../res';
import styles from './restore.styles';
import NavigationBar from '../../../components/navigationBar/navigationBar';
import Default from '../../../layout/default/default';
import { useTranslation } from 'react-i18next';
import useRestore from './hooks/useRestore';
import { CardAccordion } from '../../../components/card';
import CheckEntry from './components/checkEntry/checkEntry';
import RestoreImage from '../../../res/images/restore.png';
import Text from '../../../components/text/text';

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

      <View style={styles.listContainer}>
        <Text size="3">
          {t('backup.restore.title').toString()}
        </Text>

        {
          restore.hasElementsToSave && (
            <Text
              style={styles.subTitle}
              size="2"
              muted>
              {t('backup.restore.selectItemInstruction').toString()}
            </Text>
          )
        }
      </View>


      {
        !restore.hasElementsToSave && (
          <ScrollView contentContainerStyle={styles.container}>
            {
              !isLoading && (
                <React.Fragment>
                  <Image
                    source={RestoreImage}
                    resizeMode="contain"
                    style={styles.importImage} />

                  <Button
                    text={t('backup.restore.selectFile').toString()}
                    onPress={importFile} />
                </React.Fragment>
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
                    <CheckEntry
                      key={'00AA'}
                      disabled={restore.cleanImportedPasswords.length <= 0}
                      checked={
                        restore.cleanImportedPasswords.length > 0 &&
                        restore.cleanImportedPasswords.length === restore.passwordsToSave.length
                      }
                      onAdd={restore.checkAllPasswords}
                      onRemove={restore.uncheckAllPasswords}
                      name={t('selectAll').toString()} />

                    {
                      restore.importedPasswords.map((item) => (
                        <CheckEntry
                          key={item.id}
                          name={item.name}
                          disabled={item?.duplicated === true}
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
                    <CheckEntry
                      key={'00AA2'}
                      disabled={restore.cleanImportedTags.length <= 0}
                      checked={
                        restore.cleanImportedTags.length > 0 &&
                        restore.cleanImportedTags.length === restore.tagsToSave.length
                      }
                      onAdd={restore.checkAllTags}
                      onRemove={restore.uncheckAllTags}
                      name={t('selectAll').toString()} />

                    {
                      restore.importedTags.map((item) => (
                        <CheckEntry
                          key={item.id}
                          name={item.name}
                          disabled={item?.duplicated === true}
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
