import React, { ReactElement, useEffect } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationNames } from "../../constants/navigation-names";
import styles from "./styles";

const WelcomeScreen: React.FC = (): ReactElement => {
  const { navigate } = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(()=>{
      navigate(NavigationNames.Dashboard);
    }, 10000);
    return () => clearTimeout(timeout);
  }, [ navigate ]);

  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};

export default WelcomeScreen;
