import React from "react";
import { StyleSheet, View } from "react-native";

import Layout from "./Layout";
import { TextLink } from "./../components/Utils/Link";
import { skyRed } from "../styling/colors";
import Mountains from "./../styling/images/startscreen.svg";

const Home = ({ navigation }) => {
  return (
    <Layout gradient={[skyRed.dark, skyRed.light]} mountainHeight={136} Mountains={Mountains}>
      <View style={styles.wrapper}>
        <TextLink onPress={() => navigation.navigate("MainView")}>Step Out</TextLink>
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
