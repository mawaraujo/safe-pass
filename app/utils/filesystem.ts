import RNFS from 'react-native-fs';

interface WriteFileResponse {
  saved: boolean,
  dir?: string
}

namespace FileSystem {

  function getFilename(): string {
    return `password_manager_backup_${Date.now()}.json`;
  }

  export async function writeFile(content: string = '') {
    const filename: string = getFilename();

    const result: WriteFileResponse = {
      saved: false,
    };

    try {
      const path = `${RNFS.DownloadDirectoryPath}/${filename}`;
      await RNFS.writeFile(path, content);

      result.saved = true;
      result.dir = path;
      return result;

    } catch (error) {
      console.error(error);
      return result;
    }
  }

  export async function readFile(uri: string): Promise<string> {
    return await RNFS.readFile(uri);
  }
}

export default FileSystem;
