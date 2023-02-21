import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Default from '../../layout/default/default';
import { Crypto, FileSystem, Storage } from '../../utils';
import Button from '../../components/button/button';
import { useDispatch } from 'react-redux';
import alertSlice from '../../store/reducers/alertSlice';
import NavigationBar from '../../components/navigationBar/navigationBar';
import styles from './createBackup.styles';
import { Colors } from '../../res';
import Icons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

export default function CreateBackup() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const getStorageData = async () => {
    const content = await Storage.get('persist:root');
    if (!content || typeof content !== 'string') throw Error('Content should be String');

    return content;
  };

  const handleExport = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const content = await getStorageData();
      const encryptedContent = Crypto.encrypt(content);

      const result = await FileSystem.writeFile(encryptedContent);

      if (result?.uri) {
        dispatch(
            alertSlice.actions.show({
              title: t('Backup created successfully'),
              type: 'Success',
            }),
        );
      }

    } catch (error) {
      console.error(error);

      dispatch(
          alertSlice.actions.show({
            title: t('An error occurred while trying to create the file'),
            type: 'Danger',
          }),
      );

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Default>
      <NavigationBar name={t('Create backup') ?? 'Create backup'} />

      {
        !isLoading && (
          <View style={styles.container}>
            <View style={styles.statusContainer}>
              <Icons
                style={styles.icon}
                name="documents-outline"
                size={100}
                color={Colors.System.Brand} />

              <Text style={styles.title}>
                {t('Export your data and save it locally')}
              </Text>

              <Button
                text={t('Create backup') ?? 'Create backup'}
                onPress={handleExport} />
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
