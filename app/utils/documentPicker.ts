import {DocumentPickerResponse, pickSingle, pickDirectory, types, DirectoryPickerResponse} from 'react-native-document-picker';

namespace DocumentPicker {

  /**
   * @return {Promise<void | DocumentPickerResponse>}
   */
  export async function pickFile(): Promise<void | DocumentPickerResponse> {
    try {
      const response = await pickSingle({
        type: types.allFiles,
        mode: 'import',
      });

      return response;

    } catch (error) {
      console.error(error);
    }
  }

  export async function pickFolder(): Promise<void | DirectoryPickerResponse> {
    try {
      const response = await pickDirectory();

      if (!response) throw Error('Pick folder error');
      return response;

    } catch (error) {
      console.error(error);
    }
  }
}

export default DocumentPicker;
