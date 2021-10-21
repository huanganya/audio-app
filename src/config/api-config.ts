import { BFF_URL } from "@env";
class Config {
  public get apiBaseUrl(): string {
    return BFF_URL;
  }
}

export default new Config();
