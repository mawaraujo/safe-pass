import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import toastSlice from '../../../store/reducers/toastSlice';
import {DocumentPicker, FileSystem as FS} from '../../../utils';

export default function Import() {
  const dispatch = useDispatch();

  const handle = async () => {
    try {
      const pickResponse = await DocumentPicker.pickFile();

      if (!pickResponse) {
        dispatch(
            toastSlice.actions.show({
              title: 'Backup file import failed',
              type: 'Success',
            }),
        );
        return;
      }

      const readResponse = await FS.readFile(pickResponse.uri);
      console.log(readResponse);

      /**
       * TODO
       * 1. Verify is data is correct
       * 2. Import only if not exists, (create function)
       * 3. Add screen ui
       */

    } catch (error) {
      dispatch(
          toastSlice.actions.show({
            title: 'Backup file import failed',
            type: 'Success',
          }),
      );
      return;
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handle}>
        <Text>Import</Text>
      </TouchableOpacity>
    </View>
  );
}
