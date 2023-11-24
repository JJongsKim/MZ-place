// 일반
export const setAccessToken = (data: string) => {
  localStorage.setItem('accessToken', data);
};

export const removeAccessToken = () => {
  localStorage.removeItem('accessToken');
};

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

// 카카오용
export const setKakaoId = (kakaoId: string) => {
  localStorage.setItem('kakaoId', kakaoId);
};

export const removeKakaoId = () => {
  localStorage.removeItem('kakaoId');
};

export const getKakaoId = () => {
  return localStorage.getItem('kakaoId');
};

// 네이버용
export const setNaverId = (naverId: string) => {
  localStorage.setItem('naverId', naverId);
};

export const removeNaverId = () => {
  localStorage.removeItem('naverId');
};

export const getNaverId = () => {
  return localStorage.getItem('naverId');
};
