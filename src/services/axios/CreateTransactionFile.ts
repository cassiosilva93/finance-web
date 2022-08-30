import { FileProps } from '@src/components/Modal/types';
import axiosClient from '../clients/axiosClient';

export async function createTransactionFile(file: FileProps): Promise<void> {
  const data = new FormData();
  const fileTyped = file as File;
  data.append('transactions', fileTyped);

  await axiosClient.post('/file', data);
}
