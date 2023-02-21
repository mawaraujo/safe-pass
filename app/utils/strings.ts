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
}
