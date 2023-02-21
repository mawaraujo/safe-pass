import * as RNCS from 'react-native-scoped-storage';

namespace FileSystem {

  function getFilename(): string {
    return `password_manager_backup_${Date.now()}.json`;
  }

  /**
   * Only works in Android
   */
  export async function writeFile(content: string = '') {
    return await RNCS.createDocument(getFilename(), 'application/json', content, 'utf8');
  }

  /**
   * Only works in Android
   */
  export async function readFile(): Promise<RNCS.FileType> {
    const document = await RNCS.openDocument(true, 'utf8');
    return document;
  }
}

export default FileSystem;
