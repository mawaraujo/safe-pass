import { pickSingle, pickDirectory } from 'react-native-document-picker';

namespace DocumentPicker {

  export async function pickFile(): Promise<string> {
    const { uri } = await pickSingle({
      mode: 'import',
    });

    return uri;
  }

  export async function pickFolder(): Promise<string> {
    const response = await pickDirectory();

    if (!response) throw Error('Pick folder error');
    return response.uri;
  }
}

export default DocumentPicker;
