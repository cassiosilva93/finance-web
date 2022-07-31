import axiosClient from '../clients/axiosClient';

interface File {
  path: string;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export async function saveFile(file: File): Promise<boolean> {
  const fileExists = !!file;
  if (!fileExists) return false;

  const data = new FormData();
  data.append('transactions', file);

  await axiosClient.post('/file', data, {
    headers: {
      // TODO: Get auth token and add in Authorization prop
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ1MzRjNzU3LTkwOGYtNDQ5Yi05ZWU5LWEzYTk0MzZlOWY0OCIsImlhdCI6MTY1OTIwODc0MCwiZXhwIjoxNjU5NjQwNzQwfQ.3n8G5dctxfbi-fXVL25rtMmF27Pm8lm89zcJjrGCTeQ',
    },
  });

  return true;
}
