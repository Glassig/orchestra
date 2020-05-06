import React from "react";
import { SafeAreaView, StyleSheet, Dimensions, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Layout: React.FC<{ gradient: string[]; mountainHeight: number; Mountains: React.FC<SvgProps> }> = ({
  gradient,
  mountainHeight,
  Mountains,
  children,
}) => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <LinearGradient colors={[...gradient]} style={styles.linearGradient}></LinearGradient>
      {children}
      <View style={{ ...styles.mountainsView, height: mountainHeight }} pointerEvents={"none"}>
        <Mountains />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    position: "absolute",
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex: -1,
  },
  mountainsView: {
    width: Dimensions.get("window").width,
    position: "absolute",
    bottom: 0,
  },
  mountains: {
    bottom: 0,
    position: "absolute",
  },
});

export default Layout;
