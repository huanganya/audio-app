import React from "react";
import { Text, View } from "react-native";
import { useLogin } from "@src/hooks/useLogin";
import styles from "./styles";

const Playlist: React.FC = () => {
  useLogin();
  return (
    <View style={styles.container}>
      <Text>Playlist page(You will only when you logged in)</Text>
    </View>
  );
};

export default Playlist;
