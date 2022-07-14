export class DataHelper {
  static formatToBRDate(date: string) {
    const dateFormatted = new Date(date).toLocaleDateString('pt-BR');
    return dateFormatted;
  }
}
