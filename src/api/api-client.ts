import { fetch, ReactNativeSSLPinning } from "react-native-ssl-pinning";
import NetInfo from "@react-native-community/netinfo";
import { NetworkError } from "@src/errors/errors";
import { ErrorMessages } from "@src/constants/error-messages";
import SecService from "@src/local-services/security-service";
import config from "@src/config/api-config";

export type ApiService<T, E> = (
  payload?: any,
) => Promise<ApiResponse<T, E>> | never;

export const validateStatus = (status: number): boolean => {
  return status >= 200;
};

export interface ApiResponse<T, E> {
  data?: T;
  error?: E;
}

export type RequestParam = {
  [key: string]: string;
};

const APPLICATION_JSON = "application/json";
const commonHeaders = {
  Accept: APPLICATION_JSON,
  "Content-Type": APPLICATION_JSON,
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};

class HttpClient {
  constructor() {}
  public async get<T, E>(
    path: string,
    params?: RequestParam,
    headers?: RequestParam,
  ): Promise<ApiResponse<T, E>> | never {
    try {
      const url = config.apiBaseUrl + path;
      //to do: add certs later for sslPinning
      const response = await fetch(url, {
        headers: await this.addHeaders(headers),
        method: "GET",
        sslPinning: { certs: [] },
        timeoutInterval: 20000,
        ...params,
      });
      return await this.handleGetResponse(response);
    } catch (e) {
      return this.handleFetchError(e as any);
    }
  }

  public async post<T, E>(
    path: string,
    payload: any,
    headers?: RequestParam,
  ): Promise<ApiResponse<T, E>> | never {
    //to do: add certs later for sslPinning
    try {
      const url = config.apiBaseUrl + path;
      console.log("url1", url);
      console.log("JSON.stringify(payload)", JSON.stringify(payload));

      const response = await fetch(url, {
        body: JSON.stringify(payload),
        headers: await this.addHeaders(headers),
        method: "POST",
        timeoutInterval: 20000,
        sslPinning: { certs: [] },
      });
      console.log("url", url);
      return await this.handlePostResponse(response);
    } catch (e) {
      return this.handleFetchError(e as any);
    }
  }

  protected async addHeaders(headers?: RequestParam): Promise<RequestParam> {
    return { ...commonHeaders, ...headers };
  }

  private async handlePostResponse<T, E>(
    response: ReactNativeSSLPinning.Response,
  ): Promise<ApiResponse<T, E>> | never {
    const statusCode = response.status;

    if (statusCode === 200) {
      return { data: (await response.json()) as T };
    }

    if (statusCode >= 500) {
      throw new Error(ErrorMessages.InternalServerError);
    }

    if (statusCode === 400) {
      return Promise.reject({ error: (await response.json()) as E });
    }

    if (statusCode > 400 && statusCode < 500) {
      throw new Error(ErrorMessages.InternalServerError);
    }

    throw new Error(ErrorMessages.GeneralError);
  }

  private async handleGetResponse<T, E>(
    response: ReactNativeSSLPinning.Response,
  ): Promise<ApiResponse<T, E>> | never {
    const statusCode = response.status;

    if (statusCode === 200) {
      return { data: (await response.json()) as T };
    }
    if (statusCode >= 500) {
      throw new Error(ErrorMessages.InternalServerError);
    }

    throw new Error(ErrorMessages.GeneralError);
  }

  public async handleFetchError(
    e: ReactNativeSSLPinning.Response,
  ): Promise<never> {
    const { isInternetReachable } = await NetInfo.fetch();

    if (!isInternetReachable) {
      throw new NetworkError("Network Error");
    }
    throw await e.json();
  }
}

export class AuthorizedHttpClient extends HttpClient {
  constructor() {
    super();
  }
  protected async addHeaders(headers?: RequestParam): Promise<RequestParam> {
    const authorTokens = await SecService.getTokens();
    if (!authorTokens?.accessToken) {
      throw new Error("No accesss token");
    }
    return {
      ...commonHeaders,
      ...headers,
      authorization: `Bearer ${authorTokens?.accessToken}`,
    };
  }
}
export const authorizedHttpClient = new AuthorizedHttpClient();
export const httpClient = new HttpClient();
