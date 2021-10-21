//todo: will add more properties to UserInfo
export interface UserInfo {
  id: string;
  username: string;
  email: string;
}

export interface UserLoginResponse extends UserInfo {
  token: string;
}