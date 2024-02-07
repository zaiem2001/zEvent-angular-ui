export const handleGoBack = (payload: any) => {
  payload.handleGoBack();
};

export const handleLogout = (payload: any) => payload.handleLogout();

export const localStorageEvents = {
  save: (key: string, value: any) =>
    localStorage.setItem(key, JSON.stringify(value)),

  get: (key: string) => {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
    return null;
  },

  remove: (key: string) => localStorage.removeItem(key),
};
