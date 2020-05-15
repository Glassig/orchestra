import React from "react";
import { StyleSheet, Dimensions, View, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgProps } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout: React.FC<{
  gradient: string[];
  mountainHeight: number;
  Mountains: React.FC<SvgProps>;
  children: React.ReactNode;
}> = ({ gradient, mountainHeight, Mountains, children }) => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <StatusBar backgroundColor={gradient[0]} animated={true} />
      <LinearGradient colors={[...gradient]} style={styles.linearGradient} />
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
