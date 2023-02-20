import { Linking } from 'react-native';

export default class Link {

  static async openURL(url: string): Promise<boolean> {
    try {
      await Linking.openURL(url);
      return true;

    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
