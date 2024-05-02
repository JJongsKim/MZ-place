import { instance } from './instance';

export class AuthApi {
  constructor(private api: typeof instance) {}

  // - 일반 로그인 API
  login = (args: LoginArgsType) => {
    return this.api.post('/users/login', args);
  };

  // - 일반 로그인용 회원가입 API
  signUp = (args: SignUpArgsType) => {
    return this.api.post('/users/signup', args);
  };

  // - 카카오 소셜 로그인 API
  kakaoLogin = (args: KakaoLoginArgsType) => {
    return this.api.post('/users/kakaologin', args);
  };

  // - 네이버 소셜 로그인 API
  naverLogin = (token: string) => {
    return this.api.post('/users/naverlogin', token);
  };

  // - 회원 탈퇴
  deleteUser = (args: Record<string, string>) => {
    return this.api.delete('/users/delete', {
      headers: args,
    });
  };
}

export default new AuthApi(instance);
