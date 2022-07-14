export class StringHelper {
  static formatTitle(title: string) {
    const MAXIMUM_TITLE_SIZE_DISPLAY = 25;
    if (title.length > MAXIMUM_TITLE_SIZE_DISPLAY) {
      const titleFormatted = `${title.slice(0, 24)}...`;
      return titleFormatted;
    }
    return title;
  }
}
