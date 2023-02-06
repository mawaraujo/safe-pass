import React from 'react';
import {View} from 'react-native';
import {FileSystem as FS, Storage} from '../../../utils';
import Button from '../../../components/button/button';
import {useDispatch} from 'react-redux';
import toastSlice from '../../../store/reducers/toastSlice';

export default function Export() {
  const dispatch = useDispatch();

  const handler = async (): Promise<void> => {
    try {
      const content = await Storage.get('persist:root');
      if (content === null) return;

      await FS.writeFile(content);

      dispatch(
          toastSlice.actions.show({
            title: 'Backup file created successfully',
            type: 'Success',
          }),
      );

    } catch (error) {
      console.error(error);

      dispatch(
          toastSlice.actions.show({
            title: 'Backup file creation failed',
            type: 'Success',
          }),
      );
    }
  };

  return (
    <View>
      <Button
        text="Export"
        onPress={handler} />
    </View>
  );
}
