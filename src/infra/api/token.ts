export const setAccessToken = (data: string) => {
  localStorage.set('accessToken', data);
};

export const removeAccessToken = () => {
  localStorage.removeItem('accessToken');
};

export const getAccessToken = () => localStorage.getItem('accessToken');
