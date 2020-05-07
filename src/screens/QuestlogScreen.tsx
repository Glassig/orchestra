import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import Layout from "./Layout";
import { Quest } from "../components/Quest/Quest";
import Link from "./../components/Utils/Link";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/mission_detail.svg";

const svgHeight: number = 165; //this is different for different svgs

const Questlog = ({ navigation }) => {
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={svgHeight} Mountains={Mountains}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollview}>
        <View>
          <Quest />
          <Link
            onPress={() => {
              navigation.navigate("QuestDetail", {
                questId: 86,
              });
            }}>
            Go to Quest
          </Link>
        </View>
        <View style={styles.paddingView}></View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "transparent",
    padding: 20,
  },
  paddingView: {
    height: svgHeight,
  },
});

export default Questlog;
