import RNFS from 'react-native-fs';

export default class FileSystem {

  static getFilename(): string {
    return `password_manager_backup_${Date.now()}`;
  }

  static async writeFile(content: string, filename: string = this.getFilename()): Promise<boolean> {
    try {
      const path = `${RNFS.DownloadDirectoryPath}/${filename}`;

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
}
