import { DocumentPickerResponse, pickSingle, pickDirectory, types } from 'react-native-document-picker';

namespace DocumentPicker {

  export async function pickFile(): Promise<void | DocumentPickerResponse> {
    const response = await pickSingle({
      type: types.allFiles,
      mode: 'import',
    });

    return response;
  }

  export async function pickFolder(): Promise<string> {
    const response = await pickDirectory();

    if (!response) throw Error('Pick folder error');
    return response.uri;
  }
}

export default DocumentPicker;
