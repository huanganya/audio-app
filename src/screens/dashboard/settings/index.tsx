import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
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
        <Button title="Logout" onPress={()=>{appDispatch({ type: LOGOUT });}}/>
      </Text>
    </View>
  );
};

export default Setting;
