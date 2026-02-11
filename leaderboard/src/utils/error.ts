import { AxiosError } from 'axios';

export const handleError = (error: AxiosError) => {
  if (error?.response?.status === 500)
    return 'Unable to fetch Data!, Something went wrong';
  if (typeof error === 'string') return error;
  return Object.values(error).flat().join(', ');
};
