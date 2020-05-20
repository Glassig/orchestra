import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import MText from "./MText";

export const TextLink: React.FC<{ onPress: () => void; children: React.ReactNode }> = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <MText styles={styles.text}>{children}</MText>
    </TouchableOpacity>
  );
};

export const ComponentLink: React.FC<{ onPress: () => void; children: React.ReactNode }> = ({ onPress, children }) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
  },
  text: {
    color: "white",
    alignSelf: "center",
    fontSize: 24,
    letterSpacing: 8,
    textDecorationLine: "underline",
    fontVariant: ["small-caps"],
  },
});
