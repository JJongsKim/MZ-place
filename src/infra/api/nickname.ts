export const setNickname = (data: string) => {
  localStorage.setItem('nickname', data);
};

export const removeNickname = () => {
  localStorage.removeItem('nickname');
};

export const getNickname = () => localStorage.getItem('nickname');
