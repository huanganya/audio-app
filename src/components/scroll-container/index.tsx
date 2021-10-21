import React, { FC } from "react";
import { ScrollView } from "react-native";

export const ScrollContainer: FC = ({ children, style }) => {
  return (
    <ScrollView
      style={{ flex: 1, ...style }}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};
