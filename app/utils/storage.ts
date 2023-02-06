import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
  static async get(key: string): Promise<string | null> {
    try {
      const data = await AsyncStorage.getItem(key);
      if (!data) return null;

      return data;

    } catch (error) {
      return null;
    }
  }
}
