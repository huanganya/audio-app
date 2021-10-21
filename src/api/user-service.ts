import { apiUserEndpoints } from "../constants/api-endpoints";
import { authorizedHttpClient, httpClient } from "./api-client";
import { GenericErrorWrapper } from "../errors/error-handlers";
import { UserInfo, UserLoginResponse } from "../types/user";
import SecService from "../local-services/security-service";

export interface UserInfoParams {
  id: string;
}

export interface UserLoginParams {
  userName: string;
  password: string;
}

export interface UseRegisterParams {
  userName: string;
  email: string;
  password: string;
}
class UserService {
  @GenericErrorWrapper()
  public async login({
    params,
  }: {
    params: UserLoginParams;
  }): Promise<UserLoginResponse> {
    const response = await httpClient.post<UserLoginResponse, any>(
      apiUserEndpoints.login,
      { ...params },
    );
    if (!response.data) {
      throw new Error("login returned empty data");
    }
    await SecService.saveTokens({ accessToken: response.data.token });
    return response.data;
  }

  @GenericErrorWrapper()
  public async register({
    params,
  }: {
    params: UseRegisterParams;
  }): Promise<UserLoginResponse> {
    const response = await httpClient.post<UserLoginResponse, any>(
      apiUserEndpoints.register,
      { ...params },
    );
    if (!response.data) {
      throw new Error("login returned empty data");
    }
    await SecService.saveTokens({ accessToken: response.data.token });
    return response.data;
  }

  @GenericErrorWrapper()
  public async getUser({
    params,
  }: {
    params: UserInfoParams;
  }): Promise<UserInfo> {
    const response = await authorizedHttpClient.get<UserInfo, any>(
      apiUserEndpoints.user,
      { ...params },
    );
    if (!response.data) {
      throw new Error("user info returned empty data");
    }
    return response.data;
  }
}

export default new UserService();
