import encryptPassword from "../../utils/encryption";
import { useCallback, useContext, useEffect } from "react";
import userService from "../../api/user-service";
import { useSendApiRequest } from "../../hooks/useSendApiRequest";
import { ApiRequestStatus } from "../../constants/api-request-status";
import { AppContext } from "../../contexts/AppContext";
import { LOGIN } from "../../reducers/app-reducer-actions";

export const useLoginEffect = (): {
  loginUser: (email: string, password: string) => Promise<void>;
  status: ApiRequestStatus;
} => {
  const [sendRequest, { data, status }] = useSendApiRequest(userService.login);
  const { appDispatch } = useContext(AppContext);

  useEffect(() => {
    if (status === ApiRequestStatus.isSuccessful) {
      appDispatch({ type: LOGIN, payload: data });
    }
  }, [status]);

  const loginUser = useCallback(
    async (email, password) => {
      const encryptedPass = await encryptPassword(password);
      await sendRequest({
        params: {
          email,
          password: encryptedPass,
        },
      });
    },
    [sendRequest],
  );

  return { loginUser, status };
};
