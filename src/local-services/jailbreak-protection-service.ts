import JailMonkey from "jail-monkey";

class JailbreakProtectionService {
  async isJailbroken(): Promise<boolean> {
    return await JailMonkey.isJailBroken();
  }
}

export default new JailbreakProtectionService();
