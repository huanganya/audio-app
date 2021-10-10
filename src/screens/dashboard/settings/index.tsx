import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Button } from "@ant-design/react-native";
import { useLogin } from "../../../hooks/useLogin";
import { AppContext } from "../../../contexts/AppContext";
import { LOGOUT } from "../../../types/app-reducer-actions";
import styles from "./styles";

const Setting: React.FC = () => {
  const { state, appDispatch } = useContext(AppContext);
  useLogin();
  console.log("at Settings", state.isLoggedIn);
  return (
    <View style={styles.container}>
      <Text>
        Settings Page (Login Status: {`${state.isLoggedIn}`})
      </Text>
      <Button onPress={()=>{appDispatch({ type: LOGOUT });}}>Logout</Button>
    </View>
  );
};

export default Setting;
