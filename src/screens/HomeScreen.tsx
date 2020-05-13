import React from "react";
import { StyleSheet, View } from "react-native";

import Layout from "./Layout";
import Link from "./../components/Utils/Link";
import { skyRed } from "../styling/colors";
import Mountains from "./../styling/images/startscreen.svg";

const Home = ({ navigation }) => {
  return (
    <Layout gradient={[skyRed.dark, skyRed.light]} mountainHeight={136} Mountains={Mountains}>
      <View style={styles.wrapper}>
        <Link onPress={() => navigation.navigate("MainView")}>Step Out</Link>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Home;
