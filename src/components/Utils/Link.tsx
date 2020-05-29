import React from "react";
import { TouchableOpacity, StyleSheet, TextStyle } from "react-native";
import MText from "./MText";

export const TextLink: React.FC<{ onPress: () => void; textStyle?: TextStyle; children: React.ReactNode }> = ({
  onPress,
  textStyle,
  children,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MText styles={{ ...styles.text, ...textStyle }}>{children}</MText>
    </TouchableOpacity>
  );
};

export const ComponentLink: React.FC<{ onPress: () => void; children: React.ReactNode }> = ({ onPress, children }) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    textDecorationLine: "underline",
    fontVariant: ["small-caps"],
  },
});
