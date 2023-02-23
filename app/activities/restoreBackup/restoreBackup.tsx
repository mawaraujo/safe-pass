import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import alertSlice from '../../store/reducers/alertSlice';
import { Backup } from '../../utils';
import Button from '../../components/button/button';
import { Colors } from '../../res';
import styles from './restoreBackup.styles';
import NavigationBar from '../../components/navigationBar/navigationBar';
import Default from '../../layout/default/default';
import Icons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import useRestoreOriginalFile from './hooks/useRestoreOriginalFile';

export default function RestoreBackup() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { importPasswords, importTags } = useRestoreOriginalFile();

  const handleImport = async () => {
    setIsLoading(true);

    try {
      const { passwords, tags } = await Backup.restoreOriginalFile();

      importPasswords(passwords);
      importTags(tags);

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
