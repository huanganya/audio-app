import React from "react";
import { Text, View } from "react-native";
import { useLogin } from "../../../hooks/useLogin";
import styles from "./styles";

const Detail: React.FC = () => {
  useLogin();
  return (
    <View style={styles.container}>
      <Text>
        Detail Page(You will only when you logged in)
      </Text>
    </View>
  );
};

export default Detail;
