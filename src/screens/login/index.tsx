import React, { useContext } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@ant-design/react-native";
import { AppContext } from "../../contexts/AppContext";
import { LOGIN } from "../../types/app-reducer-actions";
import { NavigationNames } from "../../constants/navigation-names";
import styles from "./styles";

const Login: React.FC = () => {
  const { navigate } = useNavigation();
  const { state, appDispatch } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.login}>Login Status : {`${state.isLoggedIn}`}</Text>
        <Button onPress={()=>{
          appDispatch({ type: LOGIN });
          navigate(NavigationNames.Dashboard);
        }}>Login</Button>
        <Button onPress={()=>{
          navigate(NavigationNames.Home);
        }}>Go Home Without Login</Button>
      </View>
    </View>
  );
};

export default Login;
