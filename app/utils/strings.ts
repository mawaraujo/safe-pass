export default class Strings {

  static capitalizeFirstLetter(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  }

  static truncate(value: string, limit: number = 13, dots: boolean = true): string {
    if (value.length >= limit) {
      const result = value?.slice(0, limit)?.trim();

      if (dots) return `${result}...`;
      return result;
    }

    return value;
  }

  static addHttps(url: string = ''): string {
    if (!url.includes('http') || !url.includes('https')) {
      return `https://${url}`;
    }

    return url;
  }

  static generatePassword(length: number = 8): string {
    const minus = 'abcdefghijklmnopqrstuvwxyz';
    const mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789[';
    const symbols = ']}{!?_@¡-¿';

    const chars = `${symbols}${minus}${mayus}${numbers}${symbols}`;

    let password = '';
    for (let i = 1; i < length; i++) {
      const c = Math.floor(Math.random()*chars.length + 1);
      password += chars.charAt(c);
    }

    return password;
  }
}
