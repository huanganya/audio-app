import React from "react";
import { Text, View } from "react-native";
import { useLogin } from "../../../hooks/useLogin";
import styles from "./styles";

const Detail: React.FC = () => {
  useLogin();

  return (
    <View style={styles.container}>
      <Text>
        Detail Page: You have logged in so you can view this page.
      </Text>
    </View>
  );
};

export default Detail;
