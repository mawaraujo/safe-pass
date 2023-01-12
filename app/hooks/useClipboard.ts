import Clipboard from '@react-native-clipboard/clipboard';


export default function useClipboard() {
  const set = (value: string) => {
    try {
      Clipboard.setString(value);

    } catch (error) {
      console.error('Clipboard set error');
    }
  };

  return {
    set,
  };
}
