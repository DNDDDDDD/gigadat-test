import { TABLE_HEADERS } from '../constants/headers';

export const getHeaders = (headers) => {
  return headers.map((headerKey) => TABLE_HEADERS[headerKey]).filter((key) => !!key);
};
