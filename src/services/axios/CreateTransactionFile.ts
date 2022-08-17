import { FileProps } from '@src/components/Modal/types';
import axiosClient from '../clients/axiosClient';

export async function createTransactionFile(file: FileProps): Promise<void> {
  const data = new FormData();
  const fileTyped = file as File;
  data.append('transactions', fileTyped);

  await axiosClient.post('/file', data, {
    headers: {
      // TODO: Get auth token and add in Authorization prop
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZDUzNGM3NTctOTA4Zi00NDliLTllZTktYTNhOTQzNmU5ZjQ4IiwibmFtZSI6IkpvYW8gRmVycmVpcmEiLCJlbWFpbCI6ImpvYW9AZ21haWwuY29tIn0sImlhdCI6MTY2MDU3MzA1NiwiZXhwIjoxNjYxMDA1MDU2fQ.G6GwkvdG3GO2bUayqbLqdIUonTR2W4VbsAkGLD9qhj0',
    },
  });
}
