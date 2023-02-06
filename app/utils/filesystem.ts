import RNFS from 'react-native-fs';

namespace FileSystem {

  export function getFilename() {
    return `password_manager_backup_${Date.now()}`;
  }

  export async function writeFile(content: string, path: string, filename: string = getFilename()) {
    try {
      await RNFS.writeFile(
          path,
          content,
          'utf8',
      );

      return true;

    } catch (error) {
      console.log(error);
      return false;
    }
  }

  export async function readFile(uri: string) {
    try {
      const data = await RNFS.readFile(uri);
      return data;

    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default FileSystem;
