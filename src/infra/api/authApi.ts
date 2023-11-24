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
  naverLogin = (args: NaverLoginArgsType) => {
    return this.api.post('/users/naverlogin', args);
  };

  // - 회원 탈퇴
  deleteUser = (args: DeleteUserArgsType) => {
    const headers: Record<string, string> = {};

    if (args.kakao_id) {
      headers['kakao_id'] = args.kakao_id;
    } else if (args.naver_id) {
      headers['naver_id'] = args.naver_id;
    } else {
      headers['local_token'] = args.local_token!;
    }

    return this.api.delete('/users/delete', {
      headers: headers,
    });
  };
}

export default new AuthApi(instance);
