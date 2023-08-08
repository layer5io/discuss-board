// Get Item from LocalStorage
export const getItemFromLocalStorage = (item: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(item);
  }
};

// Set Item to LocalStorage
export const setItemToLocalStorage = (
  key: string,
  value: string | number | any
) => {
  if (typeof window !== 'undefined') {
    return localStorage.setItem(key, value);
  }
};

// Clear LocalStorage
export const clearLocalStorage = () => {
  if (typeof window !== 'undefined') {
    sessionStorage.clear();
    return localStorage.clear();
  }
};

// Convert JSON to JS object
export const parseJSON = (data: string) =>
  typeof window !== 'undefined' && JSON.parse(data);
