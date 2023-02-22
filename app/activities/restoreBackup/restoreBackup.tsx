import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import passwordSlice from '../../store/reducers/passwordSlice';
import alertSlice from '../../store/reducers/alertSlice';
import type { NPassword, NTag } from '../../types';
import { Crypto, FileSystem } from '../../utils';
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
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const state = useSelector((state: RootState) => state);

  const importPasswords = (passwords: NPassword.Passwords): void => {
    if (!passwords || !passwords?.length) return;

    const filteredPasswords = passwords.filter((newPassword) => {
      if (state.passwords.some((userPassword) => userPassword.id === newPassword.id)) return false;
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
      if (state.tags.some((userTag) => userTag.id === newTag.id)) return false;
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

    try {
      const document = await FileSystem.readFile();
      const data = JSON.parse(Crypto.decrypt(document.data));

      importPasswords(JSON.parse(data?.passwords));
      importTags(JSON.parse(data?.tags));

      dispatch(
          alertSlice.actions.show({
            title: t('Backup imported successfully'),
            type: 'Success',
          }),
      );

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

  return (
    <Default>
      <NavigationBar
        name={t('Restore backup') ?? 'Restore backup'} />

      {
        !isLoading && (
          <View style={styles.container}>
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
