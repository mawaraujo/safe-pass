export default class Strings {

  public static capitalizeFirstLetter(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  }
}
