import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Default from '../../../layout/default/default';
import { FileSystem, Storage } from '../../../utils';
import Button from '../../../components/button/button';
import { useDispatch } from 'react-redux';
import toastSlice from '../../../store/reducers/toastSlice';
import NavigationBar from '../../../components/navigationBar/navigationBar';
import exportStyles from './export.styles';
import { Colors } from '../../../res';

export default function Export() {
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
      const { dir } = await FileSystem.writeFile(content);

      dispatch(
          toastSlice.actions.show({
            title: `File saved in ${dir}`,
            type: 'Success',
          }),
      );

    } catch (error) {
      console.error(error);

      dispatch(
          toastSlice.actions.show({
            title: 'An error occurred while trying to create the file',
            type: 'Danger',
          }),
      );

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Default>
      <NavigationBar name="Export data" />

      {
        !isLoading && (
          <View style={exportStyles.container}>
            <Text style={exportStyles.title}>
              Save a backup on your device
            </Text>

            <Button
              text="Export data"
              onPress={handleExport} />
          </View>
        )
      }

      {
        isLoading && (
          <View style={exportStyles.container}>
            <ActivityIndicator
              size="large"
              color={Colors.System.Brand} />
          </View>
        )
      }
    </Default>
  );
}
