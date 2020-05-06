import React from "react";
import { StyleSheet, ScrollView, View, Text, Button } from "react-native";

import Layout from "./Layout";
import { Quest } from "../components/Quest/Quest";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/mission_detail.svg";

const svgHeight: number = 165; //this is different for different svgs

const Questlog = ({ navigation }) => {
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={svgHeight} Mountains={Mountains}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollview}>
        <View>
          <Quest />
          <Button
            title={"Go to Quest"}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate("QuestDetail", {
                questId: 86,
              });
            }}
          />
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
