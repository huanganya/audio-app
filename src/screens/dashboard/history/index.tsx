import React from "react";
import { Text, View } from "react-native";
import { useLogin } from "../../../hooks/useLogin";
import styles from "./styles";

const History: React.FC = () => {
  useLogin();
  return (
    <View style={styles.container}>
      <Text>
        History Page
      </Text>
    </View>
  );
};

export default History;
