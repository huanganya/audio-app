import React, { useContext } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@ant-design/react-native";
import { AppContext } from "../../../contexts/AppContext";
import { NavigationNames } from "../../../constants/navigation-names";
import styles from "./styles";

const Home: React.FC = () => {
  const { state } = useContext(AppContext);
  const { navigate } = useNavigation();

  const buttonTitle = state.isLoggedIn ? "Playlist Page" : "Playlist Page(Need Login)";
  return (
    <View style={styles.container}>
        {!state.isLoggedIn &&
          <Text>
            Home Page: You don't need to login to view this page: (Login Status: {`${state.isLoggedIn}`})
          </Text>
        }
        {state.isLoggedIn &&
          <Text>
            Welcome, {state.userInfo?.username}!
          </Text>
        }
        <Button onPress={()=>navigate(NavigationNames.Playlist)}>{buttonTitle}</Button>
        <Button onPress={()=>navigate(NavigationNames.Info)}>Info (No Need Login)</Button>
        <Button onPress={()=>navigate(NavigationNames.Play)}>Play (No Need Login)</Button>
    </View>
  );
};

export default Home;
