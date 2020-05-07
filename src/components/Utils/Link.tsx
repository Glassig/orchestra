import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Link: React.FC<{ onPress: () => void; children: React.ReactNode }> = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
  },
  text: {
    color: "white",
    alignSelf: "center",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default Link;
