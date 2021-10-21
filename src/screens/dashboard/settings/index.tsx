import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Button } from "@ant-design/react-native";
import { useLogin } from "../../../hooks/useLogin";
import { AppContext } from "../../../contexts/AppContext";
import { LOGOUT } from "../../../reducers/app-reducer-actions";
import styles from "./styles";

const Setting: React.FC = () => {
  const { state, appDispatch } = useContext(AppContext);
  useLogin();
  return (
    <View style={styles.container}>
      <Text>Settings Page (User: {state.userInfo?.userName})</Text>
      <Button
        onPress={() => {
          appDispatch({ type: LOGOUT });
        }}>
        Logout
      </Button>
    </View>
  );
};

export default Setting;
