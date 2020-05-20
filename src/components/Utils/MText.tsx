import React from "react";
import { Text } from "react-native";

const MText: React.FC<{ style: React.CSSProperties; children: React.ReactNode }> = ({ style, children }) => {
  return <Text style={{ ...style, fontFamily: "Montserrat" }}>{children}</Text>;
};

export default MText;
