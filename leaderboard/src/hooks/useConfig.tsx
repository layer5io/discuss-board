export const pickErrorKey =
  (key = 'error_message') =>
  (error: any) => {
    if (error.response) {
      if (!key) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error.response.data?.[key] ?? error.response.data);
    } else if (error.request) {
      throw new Error(`Unexpected request error`);
    } else {
      throw new Error(`Client error`);
    }
  };

export const pickResponseKey =
  (key = 'result') =>
  (response: any) => {
    if (!key) {
      return response.data;
    }
    return response.data[key];
  };
export const pickResult = pickResponseKey('result');
export const pickErrorMessage = pickErrorKey('error_msg');
