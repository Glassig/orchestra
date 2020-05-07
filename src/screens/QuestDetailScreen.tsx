import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Layout from "./Layout";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/mission_detail.svg";

const QuestDetail = ({ route, navigation }) => {
  const questId = route.params.id;
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={136} Mountains={Mountains}>
      <View style={styles.wrapper}>
        <Text>Quest Detail id: {questId}</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
  },
});

export default QuestDetail;
