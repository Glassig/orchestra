import React from "react";
import { StyleSheet, View } from "react-native";

import Layout from "./Layout";
import { TextLink } from "./../components/Utils/Link";
import MText from "./../components/Utils/MText";
import { skyRed } from "../styling/colors";
import Mountains from "./../styling/images/startscreen.svg";

const Home = ({ navigation }) => {
  return (
    <Layout gradient={[skyRed.dark, skyRed.light]} mountainHeight={136} Mountains={Mountains}>
      <View style={styles.wrapper}>
        <MText styles={styles.title} nrOfLines={1} fit={true}>
          Orchestra
        </MText>
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
  title: {
    fontFamily: "Penna",
    letterSpacing: 20,
    fontSize: 100,
    top: 75,
    position: "absolute",
  },
});

export default Home;
