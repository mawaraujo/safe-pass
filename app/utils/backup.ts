import { Crypto, FileSystem } from '.';
import { NPassword, NTag } from '../types';

interface RestoreOriginaFileResponse {
  passwords: NPassword.Passwords,
  tags: NTag.Tags
}

namespace Backup {

  export function restoreOriginalFile(): Promise<RestoreOriginaFileResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const document = await FileSystem.readFile();
        const data = JSON.parse(Crypto.decrypt(document.data));

        const passwords: NPassword.Passwords = JSON.parse(data?.passwords);
        const tags: NTag.Tags = JSON.parse(data?.tags);

        resolve({ passwords, tags });

      } catch (error) {
        reject(error);
      }
    });
  }
}

export default Backup;
