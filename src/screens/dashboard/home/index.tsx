import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../../contexts/AppContext";
import { NavigationNames } from "../../../constants/navigation-names";
import styles from "./styles";

const Home: React.FC = () => {
  const { state } = useContext(AppContext);
  const { navigate } = useNavigation();

  console.log("at Home page", state.isLoggedIn);
  const buttonTitle = state.isLoggedIn ? "Detail Page" : "Detail Page(Need Login)";
  return (
    <View style={styles.container}>
      <Text>
        Home Page: You don't need to login to view this page: (Login Status: {`${state.isLoggedIn}`})
      </Text>
      <Button title={buttonTitle} onPress={()=>navigate(NavigationNames.Detail)}/>
      <Button title="Info (No Need Login)" onPress={()=>navigate(NavigationNames.Info)}/>

    </View>
  );
};

export default Home;
