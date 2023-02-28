import React from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import Default from '../../../layout/default/default';
import { Crypto, FileSystem, Storage } from '../../../utils';
import { useDispatch } from 'react-redux';
import alertSlice from '../../../store/reducers/alertSlice';
import NavigationBar from '../../../components/navigationBar/navigationBar';
import styles from './create.styles';
import { Colors } from '../../../res';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import Title from '../../../components/title/title';
import SubTitle from '../../../components/subTitle/subTitle';

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
      <NavigationBar />

      <View style={styles.container}>
        <Title>
          {t('Create backup').toString()}
        </Title>

        <SubTitle muted>
          {t('Export your data and save it locally').toString()}
        </SubTitle>

        {
          isLoading && (
            <View style={styles.content}>
              <ActivityIndicator
                size="large"
                color={Colors.System.Brand} />
            </View>
          )
        }

        {
          !isLoading && (
            <View style={styles.content}>
              <TouchableOpacity
                onPress={handleExport}
                style={styles.button}>

                <Icon
                  name="cloud-download-outline"
                  size={50}
                  color="white" />
              </TouchableOpacity>
            </View>
          )
        }
      </View>
    </Default>
  );
}
