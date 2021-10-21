import RNSimpleCrypto from "react-native-simple-crypto";
import base64js from "base64-js";

const hexSalt = RNSimpleCrypto.utils.convertArrayBufferToHex(
  RNSimpleCrypto.utils.convertUtf8ToArrayBuffer("DigitalLabMSRS"),
);
export default async function encryptPassword(
  plainText: string,
): Promise<string> {
  const plainTextBuffer = RNSimpleCrypto.utils.convertUtf8ToArrayBuffer(
    plainText,
  );
  const keyBuffer = await RNSimpleCrypto.utils.randomBytes(32);
  const ivBuffer = await RNSimpleCrypto.utils.randomBytes(16);

  const cipherTextBuffer = await RNSimpleCrypto.AES.encrypt(
    plainTextBuffer,
    keyBuffer,
    ivBuffer,
  );

  const hexPackage =
    RNSimpleCrypto.utils.convertArrayBufferToHex(ivBuffer) +
    RNSimpleCrypto.utils.convertArrayBufferToHex(cipherTextBuffer) +
    RNSimpleCrypto.utils.convertArrayBufferToHex(keyBuffer);

  const checksum = await RNSimpleCrypto.SHA.sha256(hexPackage + hexSalt);

  const hexPackageWithChecksum = hexPackage + checksum;
  const buffHexPackageWithChecksum = new Uint8Array(
    RNSimpleCrypto.utils.convertHexToArrayBuffer(hexPackageWithChecksum),
  );

  return base64js.fromByteArray(buffHexPackageWithChecksum);
}
