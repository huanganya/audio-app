import * as Keychain from "react-native-keychain";

export interface AuthTokens {
  accessToken: string;
}

const saveTokens: (userTokens: AuthTokens) => Promise<boolean> = async (userTokens) => {
  const tokenStr = JSON.stringify(userTokens);
  try{
    await Keychain.setGenericPassword("userTokens", tokenStr);
    return true;
  }catch(e){
    return false;
  }
};

const getTokens: () => Promise<AuthTokens | null> = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials && credentials.username) {
      const userTokens: AuthTokens = JSON.parse(credentials.password);
      return userTokens;
    }
    return null;
  } catch (e) {
    return Promise.reject("Unable to retrieve token.");
  }
};

const revokeTokens: () => Promise<void> = async () => {
  try {
    await Keychain.resetGenericPassword();
    return Promise.resolve();
  } catch (e) {
    return Promise.reject("Failed to revoke token");
  }
};

export default {
  saveTokens,
  getTokens,
  revokeTokens
};
