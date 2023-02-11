import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import passwordSlice from '../../../store/reducers/passwordSlice';
import toastSlice from '../../../store/reducers/toastSlice';
import type { NPassword } from '../../../types';
import { DocumentPicker, FileSystem } from '../../../utils';
import type { RootState } from '../../../store/store';
import Button from '../../../components/button/button';
import { Colors } from '../../../res';
import importStyles from './import.styles';
import NavigationBar from '../../../components/navigationBar/navigationBar';
import Default from '../../../layout/default/default';

export default function Import() {
  const dispatch = useDispatch();
  const userPasswords = useSelector((state: RootState) => state.passwords);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [importedSuccessfully, setImportedSuccessfully] = React.useState<boolean>(false);
  const [importedPasswordsCount, setImportedPasswordsCount] = React.useState<number>(0);

  const clearStatus = () => {
    setImportedSuccessfully(false);
    setImportedPasswordsCount(0);
  };

  const importPasswords = (passwords: NPassword.Passwords) => {
    if (!passwords || !passwords?.length) return;

    const filteredPasswords = passwords.filter((newPassword) => {
      if (userPasswords.some((userPassword) => userPassword.id === newPassword.id)) {
        return false;
      }

      return newPassword;
    });

    setImportedPasswordsCount(filteredPasswords.length);

    dispatch(
        passwordSlice.actions.import(
            filteredPasswords,
        ),
    );
  };

  const handleImport = async () => {
    setIsLoading(true);
    clearStatus();

    try {
      const filename = await DocumentPicker.pickFile();
      const data = await FileSystem.readFile(filename);

      importPasswords(
          JSON.parse(
              JSON.parse(data)?.passwords,
          ),
      );

      dispatch(
          toastSlice.actions.show({
            title: 'Backup file was imported successfully',
            type: 'Success',
          }),
      );

      setImportedSuccessfully(true);

    } catch (error) {
      console.log(error);
      clearStatus();

      dispatch(
          toastSlice.actions.show({
            title: 'Backup file import failed',
            type: 'Danger',
          }),
      );

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Default>
      <NavigationBar name="Import data" />

      {
        !isLoading && (
          <View style={importStyles.container}>
            <Text style={importStyles.title}>
              {
                !importedSuccessfully
                ? 'Import backup file'
                : `Total imported passwords: ${importedPasswordsCount}`
              }
            </Text>

            <Button
              text="Select File"
              onPress={handleImport} />
          </View>
        )
      }

      {
        isLoading && (
          <View style={importStyles.container}>
            <ActivityIndicator
              size="large"
              color={Colors.System.Brand} />
          </View>
        )
      }
    </Default>
  );
}
