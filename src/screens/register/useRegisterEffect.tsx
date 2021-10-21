import encryptPassword from "../../utils/encryption";
import { useCallback, useContext, useEffect } from "react";
import userService from "../../api/user-service";
import { useSendApiRequest } from "../../hooks/useSendApiRequest";
import { ApiRequestStatus } from "../../constants/api-request-status";
import { AppContext } from "../../contexts/AppContext";
import { LOGIN } from "../../reducers/app-reducer-actions";

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
