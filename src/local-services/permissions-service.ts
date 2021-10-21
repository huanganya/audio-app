import { PERMISSIONS, check, request, RESULTS } from "react-native-permissions";
import { Platform } from "react-native";

class PermissionsService {

  async gotCameraPermissions(): Promise<boolean> {
    const permission = Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA
    });
    /* istanbul ignore if*/
    if (permission === undefined) {
      return false;
    }
    const currentPermission = await check(permission);
    if (currentPermission === RESULTS.GRANTED) {
      return true;
    }

    const newPermission = await request(permission);
    if (newPermission === RESULTS.GRANTED) {
      return true;
    }

    return false;
  }
}

export default new PermissionsService();
