import App from '../../app.json';
import CryptoJS from 'react-native-crypto-js';


export default class Crypto {
  static encrypt(data: string): string {
    try {
      const response = CryptoJS.AES.encrypt(data, App.encrypt.key);
      return response.toString();

    } catch (error) {
      throw Error(error);
    }
  }

  static decrypt(data: string): string {
    try {
      const response = CryptoJS.AES.decrypt(data, App.encrypt.key);
      return response.toString(CryptoJS.enc.Utf8);

    } catch (error) {
      throw Error(error);
    }
  }
}
