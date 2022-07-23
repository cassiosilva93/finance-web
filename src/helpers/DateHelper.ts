export class DateHelper {
  static formatToBRDate(date: string) {
    const dateFormatted = new Date(date).toLocaleDateString('pt-BR');
    return dateFormatted;
  }

  static getCompleteHourOfDate(date: string) {
    const dateFormatted = new Date(date);
    const hour = dateFormatted.getHours().toString().padStart(2, '0');
    const minutes = dateFormatted.getMinutes().toString().padStart(2, '0');
    const seconds = dateFormatted.getSeconds().toString().padStart(2, '0');

    return `${hour}:${minutes}:${seconds}`;
  }
}
