import {Linking} from 'react-native';

export default function useLink() {

  const open = async (url: string) => {
    try {
      await Linking.openURL(url);
      return true;

    } catch (error) {
      return false;
    }
  };

  return {
    open,
  };
}
