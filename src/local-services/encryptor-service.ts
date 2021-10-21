import { JSEncrypt } from "jsencrypt";
import env from "react-native-config";

const publicKey = env.QR_ENCRYPTOR_PUBLIC_KEY;

const encryptor = new JSEncrypt();
encryptor.setPublicKey(publicKey);
const encrypt = (text: string): string => {
  return encryptor.encrypt(text);
};

export {
  encrypt
};
