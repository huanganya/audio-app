import encryptPassword from "@src/utils/encryption";
import { useCallback, useContext, useEffect } from "react";
import userService from "@src/api/user-service";
import { useSendApiRequest } from "@src/hooks/useSendApiRequest";
import { ApiRequestStatus } from "@src/constants/api-request-status";
import { AppContext } from "@src/contexts/AppContext";
import { LOGIN } from "@src/reducers/app-reducer-actions";

export const useRegisterEffect = (): {
  registerUser: (
    userName: string,
    email: string,
    password: string,
  ) => Promise<void>;
  status: ApiRequestStatus;
} => {
  const [sendRequest, { data, status }] = useSendApiRequest(
    userService.register,
  );
  const { appDispatch } = useContext(AppContext);

  useEffect(() => {
    if (status === ApiRequestStatus.isSuccessful) {
      appDispatch({ type: LOGIN, payload: data });
    }
  }, [status]);

  const registerUser = useCallback(
    async (userName, email, password) => {
      const encryptedPass = await encryptPassword(password);
      await sendRequest({
        params: {
          userName,
          email,
          password: encryptedPass,
        },
      });
    },
    [sendRequest],
  );

  return { registerUser, status };
};
