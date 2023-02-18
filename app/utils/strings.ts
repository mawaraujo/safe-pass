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
}
