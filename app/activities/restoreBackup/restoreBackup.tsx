import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import passwordSlice from '../../store/reducers/passwordSlice';
import toastSlice from '../../store/reducers/toastSlice';
import type { NPassword, NTag } from '../../types';
import { FileSystem } from '../../utils';
import type { RootState } from '../../store/store';
import Button from '../../components/button/button';
import { Colors } from '../../res';
import styles from './restoreBackup.styles';
import NavigationBar from '../../components/navigationBar/navigationBar';
import Default from '../../layout/default/default';
import Icons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import tagSlice from '../../store/reducers/tagSlice';

export default function RestoreBackup() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const userPasswords = useSelector((state: RootState) => state.passwords);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [importedSuccessfully, setImportedSuccessfully] = React.useState<boolean>(false);

  const clearStatus = () => {
    setImportedSuccessfully(false);
  };

  const importPasswords = (passwords: NPassword.Passwords): void => {
    if (!passwords || !passwords?.length) return;

    const filteredPasswords = passwords.filter((newPassword) => {
      if (userPasswords.some((userPassword) => userPassword.id === newPassword.id)) return false;
      return newPassword;
    });

    dispatch(
        passwordSlice.actions.import(
            filteredPasswords,
        ),
    );
  };

  const importTags = (tags: NTag.Tags): void => {
    if (!tags || !tags?.length) return;

    const filteredTags = tags.filter((newTag) => {
      if (userPasswords.some((userTag) => userTag.id === newTag.id)) return false;
      return newTag;
    });

    dispatch(
        tagSlice.actions.import(
            filteredTags,
        ),
    );
  };

  const handleImport = async () => {
    setIsLoading(true);
    clearStatus();

    try {
      const document = await FileSystem.readFile();
      const data = JSON.parse(document.data);

      importPasswords(JSON.parse(data?.passwords));
      importTags(JSON.parse(data?.tags));

      setImportedSuccessfully(true);

    } catch (error) {
      console.log(error);
      clearStatus();

      dispatch(
          toastSlice.actions.show({
            title: t('Backup file import failed') ?? 'Backup file import failed',
            type: 'Danger',
          }),
      );

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Default>
      <NavigationBar
        name={t('Restore backup') ?? 'Restore backup'} />

      {
        !isLoading && (
          <View style={styles.container}>
            {
              !importedSuccessfully && (
                <View style={styles.statusContainer}>
                  <Icons
                    style={styles.icon}
                    name="attach-outline"
                    size={100}
                    color={Colors.System.Brand} />

                  <Text style={styles.title}>
                    {t('Select a backup file')}
                  </Text>

                  <Button
                    text={t('Select') ?? 'Select'}
                    onPress={handleImport} />
                </View>
              )
            }

            {
              importedSuccessfully && (
                <View style={styles.statusContainer}>
                  <Icons
                    style={styles.icon}
                    name="checkmark-circle-outline"
                    size={100}
                    color={Colors.System.Brand} />

                  <Text style={styles.title}>
                    {t('Backup imported successfully')}
                  </Text>

                  <Button
                    text={t('Continue') ?? 'Continue'}
                    onPress={clearStatus} />
                </View>
              )
            }
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
    </Default>
  );
}
