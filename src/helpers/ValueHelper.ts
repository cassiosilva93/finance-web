import filesize from 'filesize';

export class ValueHelper {
  static formatToBRLCurrency(value: number) {
    const valueFormatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
    return valueFormatted;
  }

  static formatFileSize(size: number) {
    return filesize(size);
  }
}
