import React from "react";
import { Text, TextStyle } from "react-native";

const MText: React.FC<{ styles?: TextStyle; nrOfLines?: number; fit?: boolean; children: React.ReactNode }> = ({
  styles,
  nrOfLines,
  fit = false,
  children,
}) => {
  const fontfam = styles && styles.fontFamily ? styles.fontFamily : "Montserrat-Medium";
  return (
    <Text
      style={{ fontFamily: fontfam, color: "white", ...styles }}
      numberOfLines={nrOfLines}
      adjustsFontSizeToFit={fit}>
      {children}
    </Text>
  );
};

export default MText;
