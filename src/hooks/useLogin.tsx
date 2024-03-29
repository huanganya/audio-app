import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useContext, useCallback } from "react";
import { NavigationNames } from "@src/constants/navigation-names";
import { AppContext } from "@src/contexts/AppContext";

export const useLogin = (): void => {
  const { state } = useContext(AppContext);
  const { navigate } = useNavigation();
  useFocusEffect(
    useCallback(() => {
      if (!state.isLoggedIn) {
        const timeOut = setTimeout(() => {
          navigate(NavigationNames.Login);
        }, 50);
        return () => {
          clearTimeout(timeOut);
        };
      }
    }, [state.isLoggedIn, navigate]),
  );
};
